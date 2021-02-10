import React from 'react'
import { useState, useEffect } from 'react'
import {
    BrowserRouter,
    Route,
    withRouter,
    Link,
    useHistory,
} from 'react-router-dom'
import logo from './images/Logo.png'
import { axiosWithAuth } from './Components/axiosWithAuth'
import { getId } from './actions/postActions'
import { connect } from 'react-redux'
import Home from './images/Home.png'
const Nav = (props) => {
    const [color1, setColor1] = useState('')
    const [color2, setColor2] = useState('')
    const [color3, setColor3] = useState('')
    const [color4, setColor4] = useState('')
    const [view, setView] = useState('')

    const [active1, setActive1] = useState('')
    const [active2, setActive2] = useState('')
    const [active3, setActive3] = useState('')
    const [active4, setActive4] = useState('')

    const CredOff = {
        Status: 'offline',
    }
    const Logout = async (e) => {
        e.preventDefault()
        try {
            axiosWithAuth()
                .patch(`/player/{ _id: ${props.One._id}, __v: 0 }`, CredOff)
                .then(window.localStorage.setItem('token', ''))
                .then(window.location.reload())
        } catch (err) {
            //  (err)
            //  ('didnt work')
        }
    }
    const token = window.localStorage.getItem('token')
    useEffect(() => {
        if (token == null || token === '') {
            setView('none')
        } else {
            setView('homeCont4')
        }
    })

    // (window.location.href)
    useEffect(() => {
        window.location.href === 'teamfinder.team/'
            ? setActive1('find')
            : setActive1('')
    })
    useEffect(() => {
        window.location.href === 'teamfinder.team/'
            ? setColor1('rgb(0, 255, 179)')
            : setColor1('#fff')
    })

    useEffect(() => {
        window.location.href === 'teamfinder.team/myPlayer/' + props.One._id
            ? setActive2('find')
            : setActive2('')
    })
    useEffect(() => {
        window.location.href === 'teamfinder.team/myPlayer/' + props.One._id
            ? setColor2('rgb(0, 255, 179)')
            : setColor2('#fff')
    })

    useEffect(() => {
        window.location.href === 'teamfinder.team/find'
            ? setColor3('rgb(0, 255, 179)')
            : setColor3('#fff')
    })
    useEffect(() => {
        window.location.href === 'teamfinder.team/find'
            ? setActive3('find')
            : setActive3('')
    })

    return (
        <div className="navi">
            <BrowserRouter>
                <nav>
                    <div className="navCont">
                        <div className="logo-cont">
                            <img src={logo} className="logo" />
                        </div>
                        <div className="homeCont1">
                            <a className={active1} href="/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-home-2"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1"
                                    stroke={color1}
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <polyline points="5 12 3 12 12 3 21 12 19 12" />
                                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                    <rect x="10" y="12" width="4" height="4" />
                                </svg>
                            </a>
                            <p>
                                {' '}
                                <a className={active1} href="/">
                                    Home
                                </a>{' '}
                            </p>
                        </div>

                        <div className="homeCont2">
                            <a className={active3} href="/find">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-rocket"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1"
                                    stroke={color3}
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
                                    <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
                                    <circle cx="15" cy="9" r="1" />
                                </svg>
                            </a>
                            <p>
                                <a className={active3} href="/find">
                                    {' '}
                                    Explore{' '}
                                </a>{' '}
                            </p>
                        </div>

                        <div className="homeCont3">
                            <a className={active2} href={`/myPlayer`}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-user"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1"
                                    stroke={color2}
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <circle cx="12" cy="7" r="4" />
                                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                </svg>
                            </a>
                            <p>
                                {' '}
                                <a className={active2} href={`/myPlayer`}>
                                    My Stats
                                </a>{' '}
                            </p>
                        </div>

                        <div className={view}>
                            <a href="/login" onClick={Logout}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-logout"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1"
                                    stroke="#fff"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                    <path d="M7 12h14l-3 -3m0 6l3 -3" />
                                </svg>
                            </a>

                            <p>
                                <a href="/login" onClick={Logout}>
                                    {' '}
                                    Logout{' '}
                                </a>{' '}
                            </p>
                        </div>
                    </div>
                </nav>
            </BrowserRouter>
        </div>
    )
}

const mapStateToProps = (state) => ({
    One: state.getId.UserId,
})

export default connect(mapStateToProps, { getId })(Nav)
