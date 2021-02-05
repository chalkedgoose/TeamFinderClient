import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { axiosWithAuth } from './axiosWithAuth'
import { getId } from '../actions/postActions'
import Animation from './Animation'
import { Link } from 'react-router-dom'

const MyPlayer = (props) => {
    const [myPlayer, setMyPlayer] = useState([])
    const [state, setState] = useState({
        Archetype: '',
        Overall: '',
        Position: '',
        Rep: '',
        System: '',
        Type: '',
        Winpercentage: '',
        Gamertag: '',
        Bio: '',
        Youtube: '',
        Instagram: '',
        Twitter: '',
        Twitch: '',
        Status: 'online',
    })

    const [overallRange, setOverallRange] = useState()
    const [userInfo, setUserInfo] = useState()
    const [wpRange, setWpRange] = useState()
    const [alert, setAlert] = useState('')
    //   "http://https://jobs-xmmtw.ondigitalocean.app//player/{ _id: 5fd9811cc0cd184690c65f07, __v: 0 }"
    useEffect(() => {
        props.getId()
    }, [])
    useEffect(() => {
        axiosWithAuth()
            .get(
                `https://jobs-xmmtw.ondigitalocean.app/player/{ _id: ${props.match.params.id}, __v: 0 }`
            )
            .then((res) => {
                setMyPlayer(res.data)
            })
            .catch((err) => {})
    }, [])

    useEffect(() => {
        axiosWithAuth()
            .get('/login')
            .then((res) => {
                setUserInfo(res.data)
            })
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        axiosWithAuth()
            .post('/player', state)
            .then((res) => {
                window.location.replace('/find')
            })
            .catch((err) => {
                setAlert('fill out all required feilds')
            })
    }
    console.log(userInfo)

    const onChange = (e) => {
        let name = e.target.value
        if (name.length < 3) {
            setState((state) => ({
                ...state,
                [e.target.name]: e.target.value,
            }))
        }
    }
    const onChange2 = (e) => {
        let name = e.target.value
        if (name.length < 30) {
            setState((state) => ({
                ...state,
                [e.target.name]: e.target.value,
            }))
        }
    }

    const onChange3 = (e) => {
        let name = e.target.value
        if (name.length < 200) {
            setState((state) => ({
                ...state,
                [e.target.name]: e.target.value,
            }))
        }
    }

    const SelectChange = (e) => {
        setState((state) => ({
            ...state,
            [e.target.name]: e.target[e.target.selectedIndex].value,
        }))
    }
    const Form = () => {
        if (myPlayer !== null) {
            return (
                <div className="cont my">
                    <Animation />

                    <div className="infoCont">
                        <div className={myPlayer.System}></div>
                        <div className="mediaCont">
                            <a
                                className={`noneview${myPlayer.Youtube}`}
                                href={myPlayer.Youtube}
                                target="_blank"
                            >
                                {' '}
                                className={`noneview${myPlayer.Youtube}`}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-brand-youtube"
                                    width="44"
                                    height="44"
                                    viewBox="0 0 24 24"
                                    stroke-width="0.8"
                                    stroke="white"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <rect
                                        x="3"
                                        y="5"
                                        width="18"
                                        height="14"
                                        rx="4"
                                    />
                                    <path d="M10 9l5 3l-5 3z" />
                                </svg>{' '}
                            </a>

                            <a
                                className={`noneview${myPlayer.Youtube}`}
                                href={myPlayer.Instagram}
                                target="_blank"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-brand-instagram"
                                    width="44"
                                    height="44"
                                    viewBox="0 0 24 24"
                                    stroke-width="0.8"
                                    stroke="white"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <rect
                                        x="4"
                                        y="4"
                                        width="16"
                                        height="16"
                                        rx="4"
                                    />
                                    <circle cx="12" cy="12" r="3" />
                                    <line
                                        x1="16.5"
                                        y1="7.5"
                                        x2="16.5"
                                        y2="7.501"
                                    />
                                </svg>
                            </a>

                            <a
                                className={`noneview${myPlayer.Youtube}`}
                                href={myPlayer.Twitter}
                                target="_blank"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-brand-twitter"
                                    width="44"
                                    height="44"
                                    viewBox="0 0 24 24"
                                    stroke-width="0.8"
                                    stroke="white"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                                </svg>
                            </a>
                            <div>
                                <a
                                    className={`noneview${myPlayer.Youtube}`}
                                    href={myPlayer.Twitch}
                                    target="_blank"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-brand-twitch"
                                        width="44"
                                        height="44"
                                        viewBox="0 0 24 24"
                                        stroke-width="0.5"
                                        stroke="#ff4500"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path d="M4 5v11a1 1 0 0 0 1 1h2v4l4 -4h5.584c.266 0 .52 -.105 .707 -.293l2.415 -2.414c.187 -.188 .293 -.442 .293 -.708v-8.585a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1z" />
                                        <line x1="16" y1="8" x2="16" y2="12" />
                                        <line x1="12" y1="8" x2="12" y2="12" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="reps">
                            <div className={`repCont ${myPlayer.System}s`}>
                                <div className={myPlayer.Rep}></div>
                            </div>
                        </div>

                        <div className="gameCont">
                            <p>
                                Gamertag
                                <br></br>
                                <span>{myPlayer.Gamertag}</span>
                            </p>
                        </div>
                        <p>Email: {props.One.email} </p>
                        <p>Name : {props.One.name} </p>

                        <div className="Win">
                            <input
                                className="range"
                                type="range"
                                value={myPlayer.Overall}
                                min="0"
                                max="100"
                            />{' '}
                            {myPlayer.Overall} OVR
                        </div>
                        <div className="Win">
                            <input
                                className="range"
                                type="range"
                                value={myPlayer.Winpercentage}
                                min="0"
                                max="100"
                            />{' '}
                            {myPlayer.Winpercentage} WP%
                        </div>
                        <div className="statsCont">
                            <p>
                                {' '}
                                <span>Archetype</span>
                                <br></br> {myPlayer.Archetype}
                            </p>
                            <p>
                                {' '}
                                <span>Position</span> <br></br>{' '}
                                {myPlayer.Position}
                            </p>
                            <p>
                                {' '}
                                <span>PlayStyle</span>
                                <br></br> {myPlayer.Type}
                            </p>
                        </div>
                        <div className="edit">
                            <Link to={`/edit/${props.One._id}`}>Edit</Link>
                        </div>
                        <div className="bioCont my">
                            <div className={`bioView ${myPlayer.System}s`}>
                                <p>
                                    {' '}
                                    Bio <br></br>
                                    {myPlayer.Bio}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            const overallRanges = (e) => {
                setOverallRange(e.target.value)
                setState((state) => ({
                    ...state,
                    Overall: e.target.value,
                }))
            }

            const wpRanges = (e) => {
                setWpRange(e.target.value)
                setState((state) => ({
                    ...state,
                    Winpercentage: e.target.value,
                }))
            }
            return (
                <div className="EditContainer">
                    <form className="createPlayerCard" onSubmit={handleSubmit}>
                        <Animation />

                        <div className={alert}>
                            <p> {alert}</p>
                        </div>
                        <select name="Rep" onChange={SelectChange}>
                            <option selected> Whats your rep?</option>
                            <option> Pro </option>
                            <option> Allstar </option>
                            <option> Superstar </option>
                            <option> Elite </option>
                            <option> Legend </option>
                        </select>
                        <select name="Type" onChange={SelectChange}>
                            <option selected>
                                {' '}
                                What kind of player are you?{' '}
                            </option>
                            <option> Casual </option>
                            <option> Competetive </option>
                        </select>
                        <select name="System" onChange={SelectChange}>
                            <option> What console are you on? </option>
                            <option> PS5 </option>
                            <option> PS4 </option>
                            <option> XBOX SERIES </option>
                            <option> XBOX ONE </option>
                        </select>
                        <select name="Position" onChange={SelectChange}>
                            <option> What position do you play?</option>
                            <option> Point Gaurd </option>
                            <option> Shooting Gaurd </option>
                            <option> Small Forward </option>
                            <option> Power Forward </option>
                            <option> Center </option>
                        </select>
                        <input
                            value={state.Gamertag}
                            name="Gamertag"
                            onChange={onChange2}
                            placeholder="Gamertag"
                        />
                        <input
                            value={state.Archetype}
                            name="Archetype"
                            onChange={onChange2}
                            placeholder="Archetype"
                        />
                        <textarea
                            className="bio"
                            value={state.Bio}
                            name="Bio"
                            onChange={onChange3}
                            placeholder="Bio"
                        />

                        <input
                            value={state.Twitter}
                            name="Twitter"
                            onChange={onChange3}
                            placeholder="*optional Twitter link "
                        />

                        <input
                            value={state.Instagram}
                            name="Instagram"
                            onChange={onChange3}
                            placeholder="*optional Instagram link  "
                        />

                        <input
                            value={state.Youtube}
                            name="Youtube"
                            onChange={onChange3}
                            placeholder="*optional Youtube link "
                        />

                        <input
                            value={state.Twitch}
                            name="Twitch"
                            onChange={onChange3}
                            placeholder=" *optional Twitch link  "
                        />

                        <div>
                            <input
                                className="range"
                                type="range"
                                onChange={overallRanges}
                                min="60"
                                max="99"
                            />{' '}
                            {overallRange} OVR
                        </div>

                        <div>
                            <input
                                className="range"
                                type="range"
                                onChange={wpRanges}
                                min="0"
                                max="99"
                            />{' '}
                            {wpRange} WP%
                        </div>

                        <button onClick={handleSubmit}>Submit </button>
                    </form>
                </div>
            )
        }
    }

    return Form()
}
const mapStateToProps = (state) => ({
    One: state.getId.UserId,
})

export default connect(mapStateToProps, { getId })(MyPlayer)
