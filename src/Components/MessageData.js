import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Forum from './Forum'
const MessageData = () => {
    const [message, setMessage] = useState()
    const token = window.localStorage.getItem('token')
    useEffect(async () => {
        try {
            const name = await axios.get(
                'https://jobs-xmmtw.ondigitalocean.app/Forum/messaging',
                {
                    headers: {
                        authorization: token,
                    },
                }
            )
            setMessage(name.data)
        } catch {
            console.log('failed')
        }
    })
    return (
        <div>
            <Forum name="hey" />
        </div>
    )
}

export default MessageData
