import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Animation from './Animation'
import { useState, useEffect } from 'react'
import Mobile from '../images/mobile.png'
import Hero from '../images/Hero.png'
const Home = () => {
    return (
        <div className="welcome-cont">
            <Animation />
            <div clasName="welcome">
                <h1 className="welcome">
                    {' '}
                    Team Finder team up with like minded players{' '}
                </h1>
                <br></br> <br></br> <br></br> <br></br>
                <p>team finder is free for a limited time</p>
            </div>
            <div className="getStartedCont">
                <a className="getStarted" href="/find">
                    {' '}
                    Get Started
                </a>
            </div>
            <div className="heroCont">
                <img class="hero " src={Hero} />
            </div>
        </div>
    )
}

export default Home
