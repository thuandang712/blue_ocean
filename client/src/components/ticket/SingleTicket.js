import React from 'react'
import { Container, Form, Jumbotron, Row, Col, Button, Alert } from "react-bootstrap";

import { updateSingleTicket, fetchSingleTicket } from '../../api/ticket.api';
import { fetchTech } from '../../api/tech.api';
import DefaultLayout from '../../layout/DefaultLayout';

const priorities = ['Low', 'Medium', 'High'];
const statuses = ['Open', 'In Progress', 'Resolved'];
const types = ['Bug/Error', 'Feature Request', 'Security', 'Other'];


class SingleTicket extends React.Component {

    state = {
        subject: '',
        description: '',
        assignee: '',
        priority: '',
        status: '',
        type: '',
        techs: [],
        loading: false,
        server_status: '',
        message: ''
    }


    async componentDidMount() {
        const { _id } = this.props.match.params;
        this.setState({ loading: true })
        // default state of ticket
        const res = await fetchSingleTicket(_id)
        this.setState({
            subject: res.ticket.subject,
            description: res.ticket.description,
            assignee: res.ticket.assignee,
            priority: res.ticket.priority,
            status: res.ticket.status,
            type: res.ticket.type
        })
        // get techs list
        const { tech } = await fetchTech()
        this.setState({ techs: tech })
        this.setState({ loading: false })
    }

    render() {
        const { _id } = this.props.match.params;
        const { subject, description, assignee, priority, status, type, message, techs, server_status } = this.state

        const handleOnChange = (e) => {
            const key = e.target.name
            const value = e.target.value
            this.setState({ [key]: value })
        }

        const handleOnSubmit = async (e) => {
            e.preventDefault();

            const ticketObj = { subject, description, assignee, priority, status, type } // key has to match with db

            this.setState({ loading: true })

            // PATCH request to /api/ticket/:id
            const resData = await updateSingleTicket(_id, ticketObj)

            if (resData.status === "success") {
                this.setState({ loading: false, server_status: 'success', message: resData.message })
            } else {
                this.setState({ loading: false, server_status: 'error', message: resData.message })
            }
        }



        return (
            <DefaultLayout>
                <Container>
                    <Jumbotron className="mt-3 add-new-ticket bg-light">
                        <Row>
                            <Col>
                                <h1 className="text-info text-center mb-2">Edit Ticket</h1>
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
                                <Form.Label column sm={3}>Subject</Form.Label>
                                <Col sm={9}>
                                    <Form.Control
                                        name="subject"
                                        value={subject}
                                        maxLength="200"
                                        onChange={handleOnChange}
                                        placeholder="Subject"
                                        required
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Form.Label column sm={3}>Description</Form.Label>
                                <Col sm={9}>
                                    <Form.Control
                                        name="description"
                                        value={description}
                                        maxLength="1000"
                                        onChange={handleOnChange}
                                        placeholder="Description"
                                        required
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Form.Label column sm={3}>Assign To</Form.Label>
                                <Col sm={9}>
                                    <select className="form-control"
                                        name='assignee'
                                        value={assignee}
                                        onChange={handleOnChange}>
                                        {techs.map(tech => {
                                            return <option key={tech._id} value={`${tech.first_name} ${tech.last_name}`}>
                                                {`${tech.first_name} ${tech.last_name}`}
                                            </option>
                                        })}
                                    </select>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Form.Label column sm={3}>Priority</Form.Label>
                                <Col sm={9}>
                                    <select className="form-control"
                                        name='priority'
                                        value={priority}
                                        onChange={handleOnChange}>
                                        {priorities.map((priority, index) => {
                                            return <option key={index} value={priority}>
                                                {priority}
                                            </option>
                                        })}
                                    </select>
                                </Col>
                            </Form.Group>


                            <Form.Group as={Row}>
                                <Form.Label column sm={3}>Status</Form.Label>
                                <Col sm={9}>
                                    <select className="form-control"
                                        name='status'
                                        value={status}
                                        onChange={handleOnChange}>
                                        {statuses.map((status, index) => {
                                            return <option key={index} value={status}>
                                                {status}
                                            </option>
                                        })}
                                    </select>
                                </Col>
                            </Form.Group>


                            <Form.Group as={Row}>
                                <Form.Label column sm={3}>Type</Form.Label>
                                <Col sm={9}>
                                    <select className="form-control"
                                        name='type'
                                        value={type}
                                        onChange={handleOnChange}>
                                        {types.map((type, index) => {
                                            return <option key={index} value={type}>
                                                {type}
                                            </option>
                                        })}
                                    </select>
                                </Col>
                            </Form.Group>

                            <Button type="submit" variant="info" block>
                                Update Ticket
                            </Button>

                        </Form>
                    </Jumbotron >
                </Container >
            </DefaultLayout>

        )
    }
}


export default SingleTicket