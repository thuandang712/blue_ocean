import React from 'react'

import { Container, Form, Jumbotron, Row, Col, Button, Alert } from "react-bootstrap";
import { createTicket } from '../../api/ticket.api';


class AddTicket extends React.Component {

    state = {
        subject: '',
        sender: '',
        content: '',

        loading: false,
        status: '',
        message: ''
    }

    // useEffect()

    render() {

        const { subject, sender, content, status, message } = this.state


        const handleOnChange = (e) => {
            const key = e.target.name
            const value = e.target.value
            this.setState({ [key]: value })
        }


        const handleOnSubmit = async (e) => {
            e.preventDefault();

            const ticketObj = { subject, sender, message: content } // key has to match with db

            this.setState({ loading: true })

            // POST request to /api/ticket/ 
            const resData = await createTicket(ticketObj)

            if (resData.status === "success") {
                this.setState({ loading: false, status: 'success', message: resData.message })
            } else {
                this.setState({ loading: false, status: 'error', message: resData.message })
            }
            this.setState({ subject: '', sender: '', content: '' })
        }



        return (
            <Container>
                <Jumbotron className="mt-3 add-new-ticket bg-light">
                    <Row>
                        <Col>
                            <h1 className="text-info text-center mb-2">Add New Ticket</h1>
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
                            <Form.Label column sm={3}>Subject</Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    name="subject"
                                    value={subject}
                                    maxLength="50"
                                    onChange={handleOnChange}
                                    placeholder="Subject"
                                    required
                                />
                                <Form.Text className="text-danger">
                                </Form.Text>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm={3}>Your name</Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    name="sender"
                                    value={sender}
                                    maxLength="50"
                                    onChange={handleOnChange}
                                    placeholder="Sender"
                                    required
                                />
                                <Form.Text className="text-danger">
                                </Form.Text>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm={3}>Message</Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    name="content"
                                    value={content}
                                    maxLength="11"
                                    onChange={handleOnChange}
                                    placeholder="Add text content..."
                                    required
                                />
                                <Form.Text className="text-danger">
                                </Form.Text>
                            </Col>
                        </Form.Group>


                        <Button type="submit" variant="info" block>
                            Add Ticket
                        </Button>
                    </Form>
                </Jumbotron>
            </Container>
        )
    }
}




export default AddTicket