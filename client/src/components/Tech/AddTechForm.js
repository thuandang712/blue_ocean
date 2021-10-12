import React from 'react'

import { Form, Jumbotron, Row, Col, Button, Alert } from "react-bootstrap";
import { createTech } from '../../api/tech.api';


class AddTechForm extends React.Component {

    state = {
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        loading: false,
        status: '',
        message: ''
    }

    // useEffect()

    render() {

        const { first_name, last_name, phone_number, email, status, message } = this.state


        const handleOnChange = (e) => {
            const key = e.target.name
            const value = e.target.value
            this.setState({ [key]: value })
        }


        const handleOnSubmit = async (e) => {
            e.preventDefault();

            const techObj = { first_name, last_name, phone_number, email } // key has to match with db

            this.setState({ loading: true })

            // POST request to /api/tech/ 
            const resData = await createTech(techObj)

            if (resData.status === "success") {
                this.setState({ loading: false, status: 'success', message: resData.message })
                this.setState({ first_name: '', last_name: '', phone_number: '', email: '' })
            } else {
                this.setState({ loading: false, status: 'error', message: resData.message })
                this.setState({ email: '' })
            }
        }



        return (
            <Jumbotron className="mt-3 add-new-ticket bg-light">
                <Row>
                    <Col>
                        <h1 className="text-info text-center mb-2">Add New Tech</h1>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        {message && (
                            <Alert variant={status === "success" ? "success" : "danger"}>
                                {message}
                            </Alert>
                        )}
                    </Col>
                </Row>

                <Form autoComplete="off" onSubmit={handleOnSubmit}>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>First Name</Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                name="first_name"
                                value={first_name}
                                maxLength="50"
                                onChange={handleOnChange}
                                placeholder="First Name"
                                required
                            />
                            <Form.Text className="text-danger">
                            </Form.Text>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Last Name</Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                name="last_name"
                                value={last_name}
                                maxLength="50"
                                onChange={handleOnChange}
                                placeholder="Last Name"
                                required
                            />
                            <Form.Text className="text-danger">
                            </Form.Text>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Phone Number</Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                name="phone_number"
                                value={phone_number}
                                maxLength="11"
                                onChange={handleOnChange}
                                placeholder="Phone Number"
                                required
                            />
                            <Form.Text className="text-danger">
                            </Form.Text>
                        </Col>
                    </Form.Group>


                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Email</Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                type="email"
                                name="email"
                                value={email}
                                maxLength="50"
                                onChange={handleOnChange}
                                placeholder="Email"
                                required
                            />
                            <Form.Text className="text-danger">
                            </Form.Text>
                        </Col>
                    </Form.Group>


                    <Button type="submit" variant="info" block>
                        Add Tech
                    </Button>
                </Form>
            </Jumbotron>
        )
    }
}




export default AddTechForm