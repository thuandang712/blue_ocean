import React from 'react'
import { Button } from 'react-bootstrap'
import { MDBCol } from "mdbreact";
import "./tickets.css"

const Tickets = () => {
    return (
        <div>
            <div>
                <h1 className="text-info text-center">Tickets Page</h1>
                <h2 className='text-center'>Admin Account: #123456</h2>
            </div>
            <MDBCol md="6">
                <input className="form-control" type="text" placeholder="Search Ticket Number or Tech" aria-label="Search" />
            </MDBCol>
            <Button className="searchBtn" variant="primary">Search</Button>{' '}
            <div className="ticketContainer"> Tickets box</div>
            <div className="statusColor3"> complete </div>
            <div> in progress </div>
            <div> unassigned </div>
            <div className="createContainer"> create new tech</div>
            <div className="createContainer"> create new ticket</div>
        </div>

    )
}

export default Tickets;
