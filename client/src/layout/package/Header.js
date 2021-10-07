import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../../layout/package/Logo.png'

export const Header = () => {
    return  <Navbar collapseOnSelect varient='dark' bg='info' expand='md'>
    <Navbar.Brand>
    <img src={logo} alt='logo' width='190px'/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
            <Nav.Link href='/Dashoard'>Home</Nav.Link>
            <Nav.Link href='/Tickets'>Tickets</Nav.Link>
            <Nav.Link href='/LogOut'>LogOut</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
}

