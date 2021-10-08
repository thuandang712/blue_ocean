import React from 'react'
// import { MDBCol } from "mdbreact";
import { Button, Container, Nav, Navbar } from 'react-bootstrap'

import "./tickets.css"

const Tickets = () => {
    return (

        <Container>
            <div>
                <h1 className="text-info text-center">Tickets Page</h1>
                <h2 className='text-center'>Admin Account: #123456</h2>
            </div>
            {/* <MDBCol md="6"> */}
            <input className="form-control" type="text" placeholder="Search Ticket Number or Tech" aria-label="Search" />
            {/* </MDBCol> */}
            <Button variant="primary">Search</Button>{' '}
        </Container>

    )
}

export default Tickets;
