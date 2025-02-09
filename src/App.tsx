import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "../src/routes/AppRoutes";
import "./styles/App.scss";

const App: React.FC = () => {
  return (

      <div className="App">
        <AppRoutes />
      </div>

  );
};

export default App;

