import React from 'react'
import { axiosWithAuth } from '../Components/axiosWithAuth'
import { Link, Redirect, useHistory } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect, useReducer, withRouter } from 'react'

const Login = (props) => {
    const [state, setState] = useState({
        email: '',
        password: '',
    })

    const [alert, setAlert] = useState()

    let history = useHistory()
    const token = window.localStorage.getItem('token')
    if (token !== '' && token !== null) {
        return <Redirect to="/" />
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        axiosWithAuth()
            .post('/login', state)
            .then((res) => {
                window.localStorage.setItem('token', res.data.token)
                console.log(res)
                window.location.reload()
            })
            .catch((err) => {
                setAlert(
                    <div className="alert">
                        'Either your email or password is incorrect'
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
    console.log(state)

    return (
        <div className="login-cont login">
            <div className="auth-cont">
                {/* <h4> Welcome login!</h4> */}

                <form className="Login" onSubmit={handleSubmit}>
                    <p> Login to team finder</p>
                    {alert}
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
                        forgot password ?
                    </Link>
                    <Link to="/signup"> dont have an account signup</Link>

                    <a className="authSubmit" onClick={handleSubmit}>
                        Login
                    </a>
                </form>
            </div>
        </div>
    )
}

export default Login
