import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const Login = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-info text-center">Client Login</h1>
                    <Form autoComplete="off" >
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                // value={email}
                                // onChange={handleOnChange}
                                placeholder="Enter Email"
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                // onChange={handleOnChange}
                                // value={password}
                                placeholder="password"
                                required
                            />
                        </Form.Group>

                        <Button type="submit">Login</Button>
                    </Form>
                </Col>
            </Row>

            <Row>
                <Col>
                    <a href="/password-reset">Forget Password?</a>
                </Col>
            </Row>
            <Row className="py-4">
                <Col>
                    Are you new here? <a href="/register">Register Now</a>
                </Col>
            </Row>

            <Row>
                <Col>
                    <a href="/">Back to home page</a>
                </Col>
            </Row>
        </Container>
    )
}

export default Login
