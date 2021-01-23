import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Animation from './Animation';
import {useState, useEffect} from 'react';
import Mobile from '../images/mobile.png'
import Hero from '../images/Hero.png'
const Home = () => {
  return (
    <div className="welcome-cont">
        <Animation/>
      <h1 className="welcome">
        {" "}
        The best way to find and connect <br></br> with other NBA 2K fanatics.
        {" "}
      </h1>
      <div className="getStartedCont">
      <a className="getStarted" href="/signup">
        {" "}
        Get Started
      </a>
      </div>
      <div className="heroCont">
<img class="hero " src={Hero}/>

      </div>

            <div className="mobileCont">
<img class="mobile " src={Mobile}/>

      </div>
    </div>
  );
};

export default Home;