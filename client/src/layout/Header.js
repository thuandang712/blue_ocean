import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../assets/logo.png'


const Header = () => {
    return (
        <Navbar collapseOnSelect variant='dark' bg='dark' expand='md'>
            <Navbar.Brand className="ms-5 my-2">
                <img src={logo} alt='logo' width='200px' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className="ms-auto me-5">
                    <Nav.Link className="px-4" href='/dashboard'>Dashboard</Nav.Link>
                    <Nav.Link className="px-4" href='/tech'>Tech</Nav.Link>
                    <Nav.Link className="px-4" href='/ticket'>Ticket</Nav.Link>
                    <Nav.Link className="px-4" href='/logout'>Log out</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
