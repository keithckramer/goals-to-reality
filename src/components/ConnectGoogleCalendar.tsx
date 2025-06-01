// import React, { useEffect, useState } from "react";

// const CLIENT_ID = "1073102396561-0p13pm10n895tr4gor2b2opretuemkq5.apps.googleusercontent.com";
// const API_KEY = "REMOVED";
// const DISCOVERY_DOCS = [
//   "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
// ];
// const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

// const ConnectGoogleCalendar = () => {
//   const [isSignedIn, setIsSignedIn] = useState(false);

//   useEffect(() => {
//     // Load Google API script
//     const script = document.createElement("script");
//     script.src = "https://apis.google.com/js/api.js";
//     script.onload = () => window.gapi.load("client:auth2", initClient);
//     document.body.appendChild(script);

//     function initClient() {
//       window.gapi.client
//         .init({
//           apiKey: API_KEY,
//           clientId: CLIENT_ID,
//           discoveryDocs: DISCOVERY_DOCS,
//           scope: SCOPES,
//         })
//         .then(() => {
//           const auth = window.gapi.auth2.getAuthInstance();
//           setIsSignedIn(auth.isSignedIn.get());
//           auth.isSignedIn.listen(setIsSignedIn);
//         });
//     }
//     // Cleanup (optional but good practice)
//     return () => {
//       if (window.gapi && window.gapi.auth2) {
//         window.gapi.auth2.getAuthInstance()?.signOut();
//       }
//     };
//     // eslint-disable-next-line
//   }, []);

//   const handleSignIn = () => {
//     window.gapi.auth2.getAuthInstance().signIn();
//   };

//   const handleSignOut = () => {
//     window.gapi.auth2.getAuthInstance().signOut();
//   };

//   return (
//     <div>
//       {!isSignedIn ? (
//         <button onClick={handleSignIn}>
//           Connect Google Calendar
//         </button>
//       ) : (
//         <button onClick={handleSignOut}>
//           Disconnect Google Calendar
//         </button>
//       )}
//     </div>
//   );
// };

// export default ConnectGoogleCalendar;
