import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { axiosWithAuth } from './Components/axiosWithAuth'
import { getId } from './actions/postActions'
import Animation from './Components/Animation'
const Edit = (props) => {
    const token = window.localStorage.getItem('token')
    const [overallRange, setOverallRange] = useState()
    const [wpRange, setWpRange] = useState()
    const [alert, setAlert] = useState('')
    const [alerts, setAlerts] = useState('')

    const [myPlayer, setMyPlayer] = useState('')
    const [saved, setSaved] = useState('')
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

    //   "http://https://jobs-xmmtw.ondigitalocean.app//player/{ _id: 5fd9811cc0cd184690c65f07, __v: 0 }"
    const Info = window.localStorage.getItem('userInfo')

    useEffect(async () => {
        try {
            const one = await axios.get(
                `https://jobs-xmmtw.ondigitalocean.app/player/{ _id: ${Info}, __v: 0 }`,
                {
                    headers: {
                        authorization: token,
                    },
                }
            )
            setMyPlayer(one.data)
            setState((state) => ({
                ...state,
                Archetype: one.data.Archetype,
                Overall: one.data.Overall,
                Position: one.data.Position,
                Rep: one.data.Rep,
                System: one.data.System,
                Type: one.data.Type,
                Winpercentage: one.data.Winpercentage,
                Gamertag: one.data.Gamertag,
                Bio: one.data.Bio,
                Youtube: one.data.Youtube,
                Instagram: one.data.Instagram,
                Twitter: one.data.Twitter,
                Twitch: one.data.Twitch,
            }))
        } catch (err) {}
    }, [])
    useEffect(() => {
        props.getId()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        axiosWithAuth()
            .put(`/player/{ _id: ${props.One._id}, __v: 0 }`, state)
            .then((res) => {
                setAlert(res.data._message)
                if (alert !== 'info validation failed') {
                    window.location.replace('/find')
                }
            })
            .catch((err) => {})
    }

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
            <form onSubmit={handleSubmit}>
                <h2> Edit your Player Card</h2>
                <div className={alert}>
                    <p> {alert}</p>
                </div>

                <Animation />
                <select name="Rep" onChange={SelectChange}>
                    <option defaultValue>{state.Rep}</option>
                    <option> Pro </option>
                    <option> Allstar </option>
                    <option> Superstar </option>
                    <option> Elite </option>
                    <option> Legend </option>
                </select>
                <select name="Type" onChange={SelectChange}>
                    <option defaultValue>{state.Rep} </option>
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
                    placeholder="Bio"
                    value={state.Bio}
                    name="Bio"
                    onChange={onChange3}
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

const mapStateToProps = (state) => ({
    One: state.getId.UserId,
})

export default connect(mapStateToProps, { getId })(Edit)
