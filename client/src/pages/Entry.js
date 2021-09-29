import React from 'react'
import { Button } from 'react-bootstrap'
import './entry.css'

const Entry = () => {
    return (
        <div className='entry-page'>
            <h1 className='title'>Welcome to the ticketing system!</h1>
            <div className='btn-container'>
                <Button href='/login' className='login-btn' size='lg'>Login</Button>
                <Button href='/register' className='register-btn' size='lg'>Register</Button>
            </div>
        </div>
    )
}

export default Entry
