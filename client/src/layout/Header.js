import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { adminLogout } from '../api/admin.api';


const Header = () => {
    const history = useHistory();

    const logMeOut = async () => {
        await adminLogout()
        sessionStorage.removeItem("accessJWT");
        localStorage.removeItem("crmSite");
        history.push("/login");
    };


    return (
        <Container className='headCont mw-100' >
            <Navbar collapseOnSelect expand='md'>
                <Navbar.Brand className="ms-5">
                    <h1 className='logo-title'>Tickets Tracker</h1>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className="ms-auto me-5">

                        <LinkContainer to='/dashboard'>
                            <Nav.Link className="px-4"><div className='nav-bar-text'>DASHBOARD</div> </Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/tech'>
                            <Nav.Link className="px-4"><div className='nav-bar-text'>TECH</div> </Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/ticket'>
                            <Nav.Link className="px-4"> <div className='nav-bar-text'>TICKET</div></Nav.Link>
                        </LinkContainer>

                        <Nav.Link className="px-4" onClick={logMeOut}><div className='nav-bar-text'>LOGOUT</div></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default Header;
