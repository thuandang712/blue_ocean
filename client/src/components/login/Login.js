import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { useHistory, useLocation, Link } from "react-router-dom";
import { adminLogin } from '../../api/admin.api';
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
    const [isAuth, setisAuth] = useState(null)


    const handleOnChange = e => {
        setisAuth(null)
        const { name, value } = e.target
        if (name === 'email') setEmail(value)
        if (name === 'password') setPassword(value)
    }


    const handleOnSubmit = async e => {
        e.preventDefault()

        // TODO call api to check if email and pw matching the db
        const obj = { email, password }
        const resData = await adminLogin(obj)

        if (resData.status === "error") {
            return setisAuth(false)
        } else {
            setisAuth(true)
            history.push("/tech");
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
                                maxLength="50"
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
                                maxLength="100"
                                required
                            />
                        </Form.Group>

                        <Button className="login-form-btn" type="submit">Login</Button>

                    </Form>
                </Col>
            </Row>


            {isAuth === false &&
                <Row className="mx-auto w-50 h-50">
                    <Col>
                        <Alert variant="danger">Invalid Email or Password!</Alert>
                    </Col>
                </Row>
            }

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
