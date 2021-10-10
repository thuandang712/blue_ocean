import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useHistory, useLocation, Link } from "react-router-dom";

import './login.style.css'


const Login = () => {

    const history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/login" } };


    useEffect(() => {
        sessionStorage.getItem("accessJWT") && history.replace(from);
    }, [history]);


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [isAuth, setisAuth] = useState(false)


    const handleOnChange = e => {
        const { name, value } = e.target
        if (name === 'email') setEmail(value)
        if (name === 'password') setPassword(value)
    }


    const handleOnSubmit = async e => {
        e.preventDefault()

        // TODO call api to check if email and pw matching the db
        try {
            const obj = { email, password }

            const res = await axios.post('http://localhost:5000/api/admin/login', obj);


            if (res.data.status === "error") {
                // setisAuth(false)
                return alert(res.data.message)   /// change to a error box later
            }


            // if (res.data.status === "success") {
            sessionStorage.setItem("accessJWT", res.data.accessJWT);
            localStorage.setItem(
                "crmSite",
                JSON.stringify({ refreshJWT: res.data.refreshJWT })
            );

            // get techs 
            // get tickets

            history.push("/dashboard");

        } catch (error) {
            console.log(error)
            // setisAuth(false)
            return alert(error.message)
        }


    }


    return (
        <Container>
            <Row className="mx-auto w-50">
                <Col>
                    <h1 className="text-info text-center mt-5">Admin Login</h1>
                    <Form autoComplete="on" onSubmit={handleOnSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control className=''
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleOnChange}
                                placeholder="Email"
                                maxLength="30"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-4">
                            <Form.Label>Password</Form.Label>
                            <Form.Control className=''
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                value={password}
                                placeholder="Password"
                                maxLength="30"
                                required
                            />
                        </Form.Group>

                        <Button className="login-form-btn" type="submit">Login</Button>

                    </Form>
                </Col>
            </Row>

            <Row className="mx-auto w-50">
                <Col>
                    <a href="/password-reset">Forget Password?</a>
                </Col>
            </Row>

            <Row className="mx-auto w-50 py-3"> {/* padding-top, padding-bottom 1 rem */}
                <Col>
                    Don't have an account yet? <a href="/register">Register Now</a>
                </Col>
            </Row>

            <Row className="mx-auto w-50">
                <Col>
                    <Link to="/">Back to home page</Link>
                </Col >
            </Row >
        </Container >
    )
}

export default Login;
