import React from 'react'

import { Button, Container } from 'react-bootstrap'

import "./tickets.css"

const Tickets = () => {
    return (

        <Container>
            <div>
                <h1 className="text-info text-center">Tickets Page</h1>
                <h2 className='text-center'>Admin Account: #123456</h2>
            </div>

            <input className="form-control" type="text" placeholder="Search Ticket Number or Tech" aria-label="Search" />

            <Button variant="primary">Search</Button>{' '}
        </Container>

    )
}

export default Tickets;
