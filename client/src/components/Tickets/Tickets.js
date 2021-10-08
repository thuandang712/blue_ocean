import React from 'react'
<<<<<<< HEAD
import { Button } from 'react-bootstrap'
import { MDBCol } from "mdbreact";
=======
>>>>>>> 59dd05d01d1510ea1e47162fbe5061ced5b0b042
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
// import { MDBCol } from "mdbreact";
import "./tickets.css"

const Tickets = () => {
    return ( 
<<<<<<< HEAD
=======
        
>>>>>>> 59dd05d01d1510ea1e47162fbe5061ced5b0b042
        <Container>
            <div>
                <h1 className="text-info text-center">Tickets Page</h1>
                <h2 className='text-center'>Admin Account: #123456</h2>
            </div>
            {/* <MDBCol md="6"> */}
<<<<<<< HEAD
             <input className="form-control" type="text" placeholder="Search Ticket Number or Tech" aria-label="Search" />
            {/* </MDBCol> */}
            <Button variant="primary">Search</Button>{' '}
        </Container>
            
=======
            <input className="form-control" type="text" placeholder="Search Ticket Number or Tech" aria-label="Search" />
            {/* </MDBCol> */}
            <Button variant="primary">Search</Button>{' '}
        </Container>
>>>>>>> 59dd05d01d1510ea1e47162fbe5061ced5b0b042

    )
}

export default Tickets;
