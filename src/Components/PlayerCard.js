import React from 'react'
import { useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import Search from './Search'
import { connect } from 'react-redux'
import search from '../images/search.png'
import Animation from './Animation'
import { getId } from '../actions/postActions'
const PlayerCard = (props) => {
    useEffect(() => {
        props.getId()
    }, [])

    const [playerInfo, setPlayerInfo] = useState([])
    const [view, setView] = useState()
    const [searchQuery, setSearchQuery] = useState([])
    const [searchQuery2, setSearchQuery2] = useState([])
    const [searchQuery3, setSearchQuery3] = useState([])
    const [searchQuery4, setSearchQuery4] = useState([])
    const [searchQuery5, setSearchQuery5] = useState([])
    const [searchQuery6, setSearchQuery6] = useState([])

    const token = window.localStorage.getItem('token')

    useEffect(() => {
        axios
            .get('https://jobs-xmmtw.ondigitalocean.app/player', {
                headers: {
                    authorization: token,
                },
            })
            .then((res) => {
                setPlayerInfo(res.data)
            })
    }, [])

    const Change = (e) => {
        setSearchQuery(e.target.value.toLowerCase())
    }

    const Change2 = (e) => {
        setSearchQuery2(e.target.value.toLowerCase())
    }
    const Change3 = (e) => {
        setSearchQuery3(e.target.value.toLowerCase())
    }
    const Change4 = (e) => {
        setSearchQuery4(e.target.value.toLowerCase())
    }

    const Change5 = (e) => {
        setSearchQuery5(e.target.value.toLowerCase())
    }

    const Change6 = (e) => {
        setSearchQuery6(e.target.value.toLowerCase())
    }

    const j = playerInfo.filter(
        (item) =>
            item.Archetype.toLowerCase().includes(searchQuery) &&
            item.Overall.toLowerCase().includes(searchQuery2) &&
            item.Rep.toLowerCase().includes(searchQuery3) &&
            item.Position.toLowerCase().includes(searchQuery4) &&
            item.Winpercentage.toLowerCase().includes(searchQuery5) &&
            item.Type.toLowerCase().includes(searchQuery6)
    )

    let s = j.sort((a, b) => {
        return a.Status.length - b.Status.length
    })

    return (
        <div>
            <Animation />
            <h1 className="welcome"> Find the perfect teammate </h1>

            <div className="searchCont">
                <input
                    className="search"
                    placeholder="Archetype"
                    onChange={Change}
                    value={searchQuery}
                />
                <svg
                    xmlns="http://www.w3.org/3000/svg"
                    class="icon icon-tabler icon-tabler-search"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="rgb(0, 255, 179)"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
                <input
                    className="search"
                    placeholder="Overall"
                    onChange={Change2}
                    value={searchQuery2}
                />
                <svg
                    xmlns="http://www.w3.org/3000/svg"
                    class="icon icon-tabler icon-tabler-search"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="rgb(0, 255, 179)"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
                <input
                    className="search"
                    placeholder="Rep"
                    onChange={Change3}
                    value={searchQuery3}
                />
                <svg
                    xmlns="http://www.w3.org/3000/svg"
                    class="icon icon-tabler icon-tabler-search"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="rgb(0, 255, 179)"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
                <input
                    className="search"
                    placeholder="Position"
                    onChange={Change4}
                    value={searchQuery4}
                />
                <svg
                    xmlns="http://www.w3.org/3000/svg"
                    class="icon icon-tabler icon-tabler-search"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="rgb(0, 255, 179)"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
                <input
                    className="search"
                    placeholder="WP%"
                    onChange={Change5}
                    value={searchQuery5}
                />
                <svg
                    xmlns="http://www.w3.org/3000/svg"
                    class="icon icon-tabler icon-tabler-search"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="rgb(0, 255, 179)"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                </svg>

                <input
                    className="search"
                    placeholder="Play Style"
                    onChange={Change6}
                    value={searchQuery6}
                />
                <svg
                    xmlns="http://www.w3.org/3000/svg"
                    class="icon icon-tabler icon-tabler-search"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="rgb(0, 255, 179)"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
            </div>

            {/* <Search/> */}
            <div className="cont">
                {j.map((info) => {
                    return (
                        <div key={info.id} className={`infoCont`}>
                            <div className={info.System}>
                                <p className="system"> {info.System} </p>
                            </div>

                            <div className="mediaCont">
                                <a
                                    className={`noneview${info.Youtube}`}
                                    href={info.Youtube}
                                    target="_blank"
                                >
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
                                    className={`noneview${info.Instagram}`}
                                    href={info.Instagram}
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
                                    className={`noneview${info.Twitter}`}
                                    href={info.Twitter}
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
                                <div className={view}>
                                    <a
                                        className={`noneview${info.Twitch}`}
                                        href={info.Twitch}
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
                                            <line
                                                x1="16"
                                                y1="8"
                                                x2="16"
                                                y2="12"
                                            />
                                            <line
                                                x1="12"
                                                y1="8"
                                                x2="12"
                                                y2="12"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="repCont">
                                <div id="repImage" className={info.Rep}></div>
                            </div>
                            <p className="Gamertag"> {info.Gamertag}</p>
                            <div className="Win">
                                <input
                                    className="range"
                                    type="range"
                                    value={info.Overall}
                                    min="0"
                                    max="100"
                                />{' '}
                                {info.Overall}
                            </div>
                            <div className="Win">
                                <input
                                    className="range"
                                    type="range"
                                    value={info.Winpercentage}
                                    min="0"
                                    max="100"
                                />{' '}
                                {info.Winpercentage}
                            </div>
                            <p className="Archetype">
                                {' '}
                                Archetype {info.Archetype}
                            </p>
                            <p className="Position">
                                {' '}
                                Position {info.Position}
                            </p>
                            <p className="PlayStyle"> PlayStyle {info.Type}</p>

                            <p className="bioView"> Bio {info.Bio}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    One: state.getId.UserId,
})

export default connect(mapStateToProps, { getId })(PlayerCard)
