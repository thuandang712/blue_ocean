import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import axios from 'axios'
import logo from '../assets/logo.png'

const Header = () => {
    const history = useHistory();

    const logMeOut = async () => {
        await axios.delete('http://localhost:5000/api/admin/logout', {
            headers: {
                Authorization: sessionStorage.getItem("accessJWT"),
            },
        });
        sessionStorage.removeItem("accessJWT");
        localStorage.removeItem("crmSite");
        history.push("/login");
    };


    return (
        <Navbar collapseOnSelect variant='dark' bg='dark' expand='md'>
            <Navbar.Brand className="ms-5 my-2">

                <img src={logo} alt='logo' width='175px' />

            <h1 id='title'>Tickets 'R' US</h1>

            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className="ms-auto me-5">

                    {/* <LinkContainer to='/'>
                        <Nav.Link className="px-4">Home</Nav.Link>
                    </LinkContainer> */}

                    <LinkContainer to='/tech'>
                        <Nav.Link className="px-4">Tech</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to='/ticket'>
                        <Nav.Link className="px-4" >Ticket</Nav.Link>
                    </LinkContainer>

                    <Nav.Link className="px-4" onClick={logMeOut}>Log out</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
