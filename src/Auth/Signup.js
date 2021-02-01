import React from 'react'
import { axiosWithAuth } from '../Components/axiosWithAuth'
import { Link, Redirect, useHistory } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect, useReducer, withRouter } from 'react'

const Signup = (props) => {
    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
    })
    const [reserved, setReserved] = useState()
    const [alert, setAlert] = useState('')

    const [submitted, setSubmitted] = useState()

    let history = useHistory()
    const token = window.localStorage.getItem('token')
    if (token !== null && token !== '') {
        return <Redirect to="/" />
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth()
            .post('/signup', state)
            .then((res) => {
                window.localStorage.setItem('token', res.data.token)
                console.log(res)
                window.location.reload()
            })
            .catch((err) => {
                setAlert(
                    <div className="alert">
                        Make sure you fill out all feilds and this email isnt
                        registered
                    </div>
                )
            })
    }

    const handleChange = (e) => {
        const { id, value } = e.target
        setState((state) => ({
            ...state,
            [id]: value,
        }))
    }

    const handleChange2 = (e) => {
        const { id, value } = e.target
        setState((state) => ({
            ...state,
            [id]: value,
        }))
    }
    // console.log(state);

    return (
        <div className="login-cont login">
            <div className="auth-cont">
                <form className="Login" onSubmit={handleSubmit}>
                    {/* <h4> Welcome Welcome Create A Team Finder Account</h4> */}

                    <h4> Welcome Create your Team Finder Account</h4>
                    {alert}
                    <input
                        id="name"
                        placeholder="name"
                        value={state.name}
                        onChange={handleChange}
                    />
                    <input
                        id="email"
                        placeholder="email"
                        value={state.email}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        value={state.password}
                        id="password"
                        placeholder="Password"
                        onChange={handleChange2}
                    />

                    <Link className="blue" to="/forgot">
                        {' '}
                        Forgot Password ?
                    </Link>
                    <Link className="authLinks" to="/login">
                        {' '}
                        Have an account login
                    </Link>
                    <a className="authSubmit" onClick={handleSubmit}>
                        Signup
                    </a>
                </form>
            </div>
        </div>
    )
}

export default Signup
