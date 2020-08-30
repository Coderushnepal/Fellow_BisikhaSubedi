import React from "react";
import "./App.css";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

// import { Portfolio } from './Portfolio/Portfolio';

import "./App.css";
import SideNav from "../constants/SideNav/SideNav";

const App = () => {
  return (
    <BrowserRouter>
      <div className="portfolio-container">
        <div className="sidenav-container">
          <SideNav />
        </div>
        <div className="main-section-container">
          <Router />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
