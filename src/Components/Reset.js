import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
const Reset = (props) => {
    const [password, setpassword] = useState()
    const [alert, setAlert] = useState()
    const [view, setView] = useState()
    const [expired, setExpired] = useState()
    const [success, setSuccess] = useState()

    const Change = (e) => {
        setpassword(e.target.value)
    }

    const axiosWithAuth = () => {
        const token = props.match.params.token
        return axios.create({
            headers: {
                authorization: token,
            },
            baseURL: 'https://jobs-xmmtw.ondigitalocean.app/',
        })
    }

    useEffect((e) => {
        axiosWithAuth()
            .get('login/verify')
            .then((res) => {
                console.log(res)
                setAlert(res.data)
                setExpired(res.data)
            })
            .catch((err) => {
                setView('none')
                setExpired('Link Expired')
            })
    })

    const Submit = (e) => {
        e.preventDefault()
        axios
            .post('https://jobs-xmmtw.ondigitalocean.app/login/reset', {
                id: props.match.params.id,
                password: password,
            })
            .then((res) => {
                console.log(res)
                window.location.replace('/find')
                setSuccess('Sucessfully Updated reset')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    console.log(props.match.params.token)
    return (
        <div className="forgotCont">
            <div className="forgot">
                <form onSubmit={Submit}>
                    {expired}
                    <div className={view}>
                        <p>Enter your new password </p>
                        <input
                            className={view}
                            onChange={Change}
                            type="password"
                            value={password}
                            placeholder="Enter your password"
                        />
                        <button className={view} onClick={Submit}>
                            {' '}
                            Send{' '}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Reset
