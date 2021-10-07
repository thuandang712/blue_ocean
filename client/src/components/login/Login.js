import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import './login.style.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleOnChange = e => {
        const { name, value } = e.target
        if (name === 'email') setEmail(value)
        if (name === 'password') setPassword(value)
    }

    const handleOnSubmit = e => {
        e.preventDefault()

        console.log(email)
        console.log(password)

        // TODO call api to check if email and pw matching the db
        //
        setEmail('')
        setPassword('')
    }


    return (
        <Container>
            <Row className="mx-auto w-50">
                <Col>
                    <h1 className="text-info text-center mt-5">Admin Login</h1>
                    <Form autoComplete="off" onSubmit={handleOnSubmit}>
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
                    Are you new here? <a href="/register">Register Now</a>
                </Col>
            </Row>

            <Row className="mx-auto w-50">
                <Col>
                    <a href="/">Back to home page</a>
                </Col >
            </Row >
        </Container >
    )
}

export default Login
