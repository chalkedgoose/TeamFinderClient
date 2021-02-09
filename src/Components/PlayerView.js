import React, { useEffect, useState } from 'react'
import axios from 'axios'
const PlayerView = ({
    match: {
        params: { id },
    },
}) => {
    const [info, setInfo] = useState()
    const [view, setView] = useState()
    const [noinfo, setNoinfo] = useState()
    const token = window.localStorage.getItem('token')
    useEffect(() => {
        axios
            .get(
                `https://jobs-xmmtw.ondigitalocean.app/player/{ _id: ${id}, __v: 0 }`,
                {
                    headers: {
                        authorization: token,
                    },
                }
            )
            .then((res) => {
                if (res.data) {
                    setInfo(res.data)
                    setView(
                        <div>
                            <div>{res.data.Gamertag}</div>
                        </div>
                    )
                } else {
                    setNoinfo(
                        <div className="noPlayer">
                            This player doesnt have a player card
                        </div>
                    )
                }
            })
    }, [])

    return (
        <div>
            {noinfo}
            {view}
        </div>
    )
}

export default PlayerView
