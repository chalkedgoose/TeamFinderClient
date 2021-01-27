import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
    return (
        <div className="NotFound">
            <h1> 404</h1>
            <Link to="/">
                {' '}
                This page doesnt exist click here to go to the home page
            </Link>
        </div>
    )
}

export default NotFound
