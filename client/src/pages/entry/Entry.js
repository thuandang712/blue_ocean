import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './entry.style.css'

const Entry = () => {
    return (
        <div className='entry-page'>
            <h1 className='title'>Welcome to the ticketing system!</h1>
            <div className='btn-container'>
                <Link to="/login">
                    <Button className='login-btn' size='lg'>Login</Button>
                </Link>
                {/* <Link to="/register">
                    <Button className='register-btn' size='lg'>Register</Button>
                </Link> */}
            </div>
        </div>
    )
}

export default Entry
