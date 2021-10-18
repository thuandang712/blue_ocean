import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import axios from 'axios'


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
        <Container className='headCont mh-100 mw-100' >

            <Navbar collapseOnSelect variant='dark' expand='md'>
                <Navbar.Brand className="ms-5 my-2">

                    {/* <img src={logo} alt='logo' width='175px' /> */}

                    <h1 id='title'>Tickets Tracker</h1>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className="ms-auto me-5">

                        <LinkContainer to='/dashboard'>
                            <Nav.Link className="px-4"><div className='almondText'>DASHBOARD</div> </Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/tech'>
                            <Nav.Link className="px-4"><div className='almondText'>TECH</div> </Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/ticket'>
                            <Nav.Link className="px-4"> <div className='almondText'>TICKET</div></Nav.Link>
                        </LinkContainer>

                        <Nav.Link className="px-4" onClick={logMeOut}><div className='almondText'>LOGOUT</div></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default Header;
