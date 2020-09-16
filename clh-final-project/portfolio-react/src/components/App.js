import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

const api = axios.create({
  baseURL: `http://localhost:8848/`,
});

class App extends Component {
  constructor() {
    super();
    api.get("/").then((res) => {
      console.log(res.data);
    });
  }
  render() {
    return (
      <BrowserRouter>
        <div className="portfolio-container">
          <div className="main-section-container">
            <Router />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
