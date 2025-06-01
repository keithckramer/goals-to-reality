import React, { useEffect, useRef, useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format } from "date-fns";
import { parse } from "date-fns";
import { startOfWeek } from "date-fns";
import { getDay } from "date-fns";
import { enUS } from "date-fns/locale/en-US";

// Your credentials
const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID!;
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY!;

const DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
];
const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

// Localizer for react-big-calendar
const locales = { "en-US": enUS };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }),
  getDay,
  locales,
});

const PlannerSchedule = () => {
  const [events, setEvents] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [tokenClient, setTokenClient] = useState<any>(null);
  const [gapiLoaded, setGapiLoaded] = useState(false);

  // 1. Load GIS and GAPI scripts
  useEffect(() => {
    // GIS
    const gisScript = document.createElement("script");
    gisScript.src = "https://accounts.google.com/gsi/client";
    gisScript.async = true;
    document.body.appendChild(gisScript);

    // GAPI
    const gapiScript = document.createElement("script");
    gapiScript.src = "https://apis.google.com/js/api.js";
    gapiScript.async = true;
    gapiScript.onload = () => setGapiLoaded(true);
    document.body.appendChild(gapiScript);

    return () => {
      document.body.removeChild(gisScript);
      document.body.removeChild(gapiScript);
    };
  }, []);

  // 2. Set up token client after scripts load
  const [gisLoaded, setGisLoaded] = useState(false);
// const [gapiLoaded, setGapiLoaded] = useState(false);
// const [tokenClient, setTokenClient] = useState<any>(null);

useEffect(() => {
  // GIS
  const gisScript = document.createElement("script");
  gisScript.src = "https://accounts.google.com/gsi/client";
  gisScript.async = true;
  gisScript.onload = () => setGisLoaded(true);
  document.body.appendChild(gisScript);

  // GAPI
  const gapiScript = document.createElement("script");
  gapiScript.src = "https://apis.google.com/js/api.js";
  gapiScript.async = true;
  gapiScript.onload = () => setGapiLoaded(true);
  document.body.appendChild(gapiScript);

  return () => {
    document.body.removeChild(gisScript);
    document.body.removeChild(gapiScript);
  };
}, []);

useEffect(() => {
  if (
    typeof window !== "undefined" &&
    window.google &&
    window.gapi &&
    gisLoaded &&
    gapiLoaded
  ) {
    window.gapi.load("client", async () => {
      await window.gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: DISCOVERY_DOCS,
      });

      const client = window.google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: (tokenResponse: any) => {
          console.log("Token response:", tokenResponse);
          if (tokenResponse.access_token) {
            setIsSignedIn(true);
            window.gapi.client.setToken({ access_token: tokenResponse.access_token });
            fetchEvents();
          }
        },
      });
      setTokenClient(client);
    });
  }
}, [gisLoaded, gapiLoaded]);


  
  

  // 3. Sign in: Launch GIS popup, get access token, fetch events
  const handleSignIn = () => {
  if (!tokenClient) {
    alert("Token client is not initialized yet!");
    return;
  }
  tokenClient.requestAccessToken();
};



  const handleSignOut = () => {
    setIsSignedIn(false);
    setEvents([]);
    // There is no "signOut" with GIS tokens, but you can revoke token if needed
  };

  // 4. Fetch Google Calendar events
  const fetchEvents = async () => {
    try {
      console.log("Fetching Google Calendar events...");
      const response = await window.gapi.client.calendar.events.list({
        calendarId: "primary",
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 30,
        orderBy: "startTime",
      });
      console.log("Events API response:", response);
      const gEvents = response.result.items.map((event: any) => ({
        title: event.summary,
        start: new Date(event.start.dateTime || event.start.date),
        end: new Date(event.end.dateTime || event.end.date),
        allDay: !event.start.dateTime,
      }));
      setEvents(gEvents);
    } catch (err) {
      alert("Could not fetch calendar events. Did you grant access?");
    }
  };

  return (
    <div style={{ height: '100%', background: "#f5f7fa", borderRadius: 10, padding: 0 }}>
      <div style={{ marginBottom: 2 }}>
       <button
        onClick={handleSignIn}
        disabled={!tokenClient}
          >
        Connect Google Calendar
      </button>

      </div>
      <Calendar
        localizer={localizer}
        events={events}
        defaultView="day"
        views={["day"]}
        step={30}
        timeslots={1}
        defaultDate={new Date()}
        style={{ height: 600 }}
        toolbar={false}
        min={new Date(new Date().setHours(6, 0))}
        max={new Date(new Date().setHours(21, 30))}
      />
    </div>
  );
};

export default PlannerSchedule;
