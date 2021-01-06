import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="welcome-cont">
      <h1 className="welcome">
        {" "}
        The best way to find and connect <br></br>with other NBA 2K fanatics.{" "}
      </h1>
      <button className="getStarted" href="find">
        {" "}
        Get Started
      </button>
    </div>
  );
};

export default Home;

