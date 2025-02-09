import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Ensure this imports App correctly
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


