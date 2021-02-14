import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Forum = (props) => {
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState()
    console.log(props.name)
    const [messageName, setMessageName] = useState('messagebubble')
    const name = window.localStorage.getItem('name')
    const u = window.localStorage.getItem('userInfo')
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
            setMessages(name.data)
        } catch {
            console.log('failed')
        }
    }, [])
    const Submit = (e) => {
        e.preventDefault()
        axios
            .post(
                'https://jobs-xmmtw.ondigitalocean.app/Forum/messaging',
                {
                    content: message,
                    name: name,
                    date: Date.now(),
                },
                {
                    headers: {
                        authorization: token,
                    },
                },
                {}
            )
            .then((res) => {})
            .catch((err) => {
                alert(err)
            })
    }
    const Change = (e) => {
        setMessage(e.target.value)
    }

    useEffect(() => {
        messages.map((item) => {
            if (item.name === name) {
                setMessageName('messagebubble me')
            }
        })
    }, [])

    return (
        <div className="messageCont">
            <div className="Messages">
                {messages.map((item) => {
                    if (item.name === name) {
                        return (
                            <div className="mesCont">
                                <div className="message" key={item.id}>
                                    <p className="messagebubble me">
                                        {item.content}
                                    </p>
                                    <p className="name">{item.name}</p>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div className="message" key={item.id}>
                                <p className="messagebubble">{item.content}</p>
                                <p className="name">{item.name}</p>
                            </div>
                        )
                    }
                })}
                <form onSubmit={Submit}>
                    <input onChange={Change} value={message} />
                    <button onClick={Submit}>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Forum
