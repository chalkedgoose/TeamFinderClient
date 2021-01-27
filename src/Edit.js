import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { axiosWithAuth } from './Components/axiosWithAuth'
import { getId } from './actions/postActions'
import Animation from './Components/Animation'
import { Redirect } from 'react-router-dom'
const Edit = (props) => {
    const token = window.localStorage.getItem('token')
    const [overallRange, setOverallRange] = useState()
    const [wpRange, setWpRange] = useState()
    const [alert, setAlert] = useState('')
    const [alerts, setAlerts] = useState('')

    const [myPlayer, setMyPlayer] = useState('')
    const [saved, setSaved] = useState('')

    //   "http://https://jobs-xmmtw.ondigitalocean.app//player/{ _id: 5fd9811cc0cd184690c65f07, __v: 0 }"

    useEffect(() => {
        axios
            .get(
                `https://jobs-xmmtw.ondigitalocean.app/player/{ _id: ${props.match.params.id}, __v: 0 }`,
                {
                    headers: {
                        authorization: token,
                    },
                }
            )
            .then((res) => {
                setMyPlayer(res.data)
            })
            .catch((err) => {})
    }, [])

    const [state, setState] = useState({
        Archetype: myPlayer.Archetype,
        Overall: myPlayer.Overall,
        Position: myPlayer.Position,
        Rep: myPlayer.Rep,
        System: myPlayer.System,
        Type: myPlayer.Type,
        Winpercentage: myPlayer.Winpercentage,
        Gamertag: myPlayer.Gamertag,
        Bio: myPlayer.Bio,
        Youtube: myPlayer.Youtube,
        Instagram: myPlayer.Instagram,
        Twitter: myPlayer.Twitter,
        Twitch: myPlayer.Twitch,
        Status: 'online',
    })

    useEffect(() => {
        props.getId()
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault()
        axiosWithAuth()
            .put(`/player/{ _id: ${props.One._id}, __v: 0 }`, state)
            .then((res) => {
                // console.log(res);
                setAlert(res.data._message)
                window.location.replace('/find')
            })
            .catch((err) => {
                // console.log(err)
            })
    }

    const onChange = (e) => {
        let name = e.target.value
        if (name.length < 3) {
            setState((state) => ({
                ...state,
                [e.target.name]: e.target.value,
            }))
        }
        // console.log(state);
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
        setState((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }
    const SelectChange = (e) => {
        setState((state) => ({
            ...state,
            [e.target.name]: e.target[e.target.selectedIndex].value,
        }))
    }

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
    console.log(myPlayer)
    return (
        <div className="EditContainer">
            <form onSubmit={handleSubmit}>
                <div className={alert}>
                    <p> {alert}</p>
                </div>

                <Animation />
                <select name="Rep" onChange={SelectChange}>
                    <option selected> Whats your rep?</option>
                    <option> Pro </option>
                    <option> Allstar </option>
                    <option> Superstar </option>
                    <option> Elite </option>
                    <option> Legend </option>
                </select>
                <select name="Type" onChange={SelectChange}>
                    <option selected> What kind of player are you? </option>
                    <option> Casual </option>
                    <option> Competetive </option>
                </select>
                <select name="System" onChange={SelectChange}>
                    <option> What console are you on? </option>
                    <option> Playstation </option>
                    <option> XBOX </option>
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
                    placeholder="Your Twitter Link * optional "
                />

                <input
                    value={state.Instagram}
                    name="Instagram"
                    onChange={onChange3}
                    placeholder="Your Instagram Link * optional "
                />

                <input
                    value={state.Youtube}
                    name="Youtube"
                    onChange={onChange3}
                    placeholder=" Your Youtube Link * optional "
                />

                <input
                    value={state.Twitch}
                    name="Twitch"
                    onChange={onChange3}
                    placeholder=" Your Twitch Link * optional "
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

const mapStateToProps = (state) => ({
    One: state.getId.UserId,
})

export default connect(mapStateToProps, { getId })(Edit)
