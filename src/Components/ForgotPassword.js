import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ForgotPassword = () => {
    const [email, setEmail] = useState()
    const [sent, setSent] = useState()
    const [view, setView] = useState()
    const [alert, setAlert] = useState()

    const Submit = (e) => {
        e.preventDefault()
        axios
            .post('https://jobs-xmmtw.ondigitalocean.app/forgot', {
                email: email,
            })
            .then((res) => {
                setView('none')
                setSent(
                    <div className="linkSent">
                        <div className="forgotCont">
                            <div className="forgot">
                                <h1> Reset Linked Sent</h1>
                                <p> check your email for reset link</p>
                                <a href="/">Go Home!</a>
                            </div>
                        </div>
                    </div>
                )
            })
            .catch((err) => {
                err
                setAlert(
                    <div className="alert">
                        Makle sure this email is connected to Team Finder
                    </div>
                )
            })
    }

    const Change = (e) => {
        setEmail(e.target.value.toLowerCase())
    }

    return (
        <div className="forgotCont">
            <div className="forgot">
                {sent}
                <div id="forgot" className={view}>
                    <form onSubmit={Submit}>
                        {alert}
                        <h3> Enter your email to get a reset link</h3>
                        <input
                            placeholder="Enter your email"
                            onChange={Change}
                            value={email}
                        />

                        <button onClick={Submit}> Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
