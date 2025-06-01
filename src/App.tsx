import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header"; // Import the Header component
import "./styles/App.scss";
import { Container, CssBaseline, Toolbar } from "@mui/material";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Header />
      <Toolbar /> {/* Adds spacing below fixed AppBar */}
      <Container maxWidth={false}>
        <AppRoutes />
      </Container>
    </BrowserRouter>
    // <BrowserRouter>
    //   <div className="App">
    //     <Header /> {/* Always visible on all pages */}
    //     <AppRoutes /> {/* Routes will render below the header */}
    //   </div>
    // </BrowserRouter>
  );
};

export default App;


