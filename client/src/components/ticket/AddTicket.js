import React from 'react'
import DefaultLayout from '../../layout/DefaultLayout';
import { Container, Form, Jumbotron, Row, Col, Button, Alert } from "react-bootstrap";
import { createTicket } from '../../api/ticket.api';
import { fetchTech } from '../../api/tech.api';

const priorities = ['', 'Low', 'Medium', 'High'];
const statuses = ['', 'Open', 'In Progress', 'Resolved'];
const types = ['', 'Bug/Error', 'Feature Request', 'Security', 'Other'];


class AddTicket extends React.Component {

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
        this.setState({ loading: true })
        // set default values
        this.setState({
            priority: priorities[0],
            status: statuses[0],
            type: types[0]
        })
        const res = await fetchTech()
        this.setState({
            techs: res.tech,
            assignee: res.tech[0].first_name + ' ' + res.tech[0].last_name, // default value for assignee
        })
        this.setState({ loading: false })
    }


    render() {

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

            // POST request to /api/ticket/ 
            const resData = await createTicket(ticketObj)

            if (resData.status === "success") {
                this.setState({ loading: false, server_status: 'success', message: resData.message })
            } else {
                this.setState({ loading: false, server_status: 'error', message: resData.message })
            }

            this.setState({ subject: '', description: '', priority: '', status: '', type: '' })
        }



        return (
            <DefaultLayout>
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
                                Add Ticket
                            </Button>

                        </Form>
                    </Jumbotron >
                </Container >
            </DefaultLayout>
        )
    }
}


export default AddTicket