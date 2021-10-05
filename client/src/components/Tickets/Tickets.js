import React from 'react'
import { Button } from 'react-bootstrap'
// import { MDBCol } from "mdbreact";
import "./tickets.css"

const Tickets = () => {
    return (
        <container>
            <div>
                <h1 className="text-info text-center">Tickets Page</h1>
                <h2 className='headerContainer text-center'>Admin Account: #123456</h2>
            </div>
            {/* <MDBCol md="6"> */}
            <input className="form-control" type="text" placeholder="Search Ticket Number or Tech" aria-label="Search" />
            {/* </MDBCol> */}
            <Button variant="primary">Search</Button>{' '}
        </container>

    )

}

export default Tickets;
