import React from 'react';

import { Container, Form, Jumbotron, Row, Col, Button, Alert } from "react-bootstrap";
import { fetchSingleTech, updateSingleTech } from '../../api/tech.api';
import DefaultLayout from '../../layout/DefaultLayout';


class SingleTech extends React.Component {

    state = {
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        loading: false,
        server_status: '',
        message: ''
    }

    async componentDidMount() {
        const { _id } = this.props.match.params;
        this.setState({ loading: true })
        // default state of tech
        const res = await fetchSingleTech(_id)
        this.setState({
            first_name: res.tech.first_name,
            last_name: res.tech.last_name,
            phone_number: res.tech.phone_number,
            email: res.tech.email,
        })
        this.setState({ loading: false })
    }

    render() {
        const { _id } = this.props.match.params;
        const { first_name, last_name, phone_number, email, server_status, message } = this.state


        const handleOnChange = (e) => {
            const key = e.target.name
            const value = e.target.value
            this.setState({ [key]: value })
        }


        const handleOnSubmit = async (e) => {
            e.preventDefault();

            const techObj = { first_name, last_name, phone_number } // key has to match with db

            this.setState({ loading: true })

            // PATCH request to /api/tech/:id
            const resData = await updateSingleTech(_id, techObj)

            if (resData.status === "success") {
                this.setState({ loading: false, server_status: 'success', message: resData.message })
                this.setState({ first_name: '', last_name: '', phone_number: '', email: '' })
            } else {
                this.setState({ loading: false, server_status: 'error', message: resData.message })
                this.setState({ email: '' })
            }
        }



        return (
            <DefaultLayout>
                <Container>
                    <Jumbotron className="mt-3 add-new-ticket bg-light">
                        <Row>
                            <Col>
                                <h1 className="text-info text-center mb-2">Edit Tech</h1>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                {message && (
                                    <Alert variant={server_status === "success" ? "success" : "danger"}>
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
                                        disabled
                                        value={email}
                                        placeholder="Email"
                                    />
                                    <Form.Text className="text-danger">
                                    </Form.Text>
                                </Col>
                            </Form.Group>

                            <Button type="submit" variant="info" block>
                                Edit Tech
                            </Button>
                        </Form>
                    </Jumbotron>
                </Container>
            </DefaultLayout>
        )
    }
}


export default SingleTech