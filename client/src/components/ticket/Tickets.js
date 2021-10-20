import React from 'react'
import { Row, Col, Button, Table } from 'react-bootstrap'
import { Link } from "react-router-dom";

import { fetchTicket, deleteSingleTicket } from '../../api/ticket.api';

import SearchForm from '../search-form/SearchForm'
import TicketTable from './TicketTable'
import DefaultLayout from '../../layout/DefaultLayout';


class Tickets extends React.Component {

    state = {
        loading: false,
        tickets: [],
        singleTicket: null,
        filtered: null,
        showResolved: false
    }


    async componentDidMount() {
        this.setState({ loading: true })
        const res = await fetchTicket()
        this.setState({ tickets: res.ticket })
        this.setState({ loading: false })
    }


    render() {
        const { tickets, filtered, showResolved } = this.state


        const getOpenList = () => {
            return tickets.map(ticket => {
                if (ticket.status !== 'Resolved') {
                    return <TicketTable key={ticket._id} ticket={ticket} deleteTicket={deleteTicket} />
                }
            })
        }


        const getResolvedList = () => {
            return tickets.map(ticket => {
                if (ticket.status === 'Resolved') {
                    return <TicketTable key={ticket._id} ticket={ticket} deleteTicket={deleteTicket} />
                }
            })
        }

        // filter both open and resolved tickets
        const getFilteredList = () => {
            if (filtered !== null) {
                return filtered.map(ticket => {
                    return <TicketTable key={ticket._id} ticket={ticket} deleteTicket={deleteTicket} />
                })
            }
        }


        // search function 
        const searchTicketBySubject = (text) => {
            if (text.length === 0) {
                this.setState({ filtered: null })
            } else {
                let filteredList = tickets.filter(ticket => {
                    // if (ticket.status !== 'Resolved') { // use if only want to search for open tickets
                    let regexp = new RegExp(text, 'gi')
                    return ticket.subject.match(regexp)
                    // }
                })
                this.setState({ filtered: filteredList })
            }
        }


        // delete ticket
        const deleteTicket = async (_id) => {
            // Delete in DB
            await deleteSingleTicket(_id)
            const res = await fetchTicket()
            this.setState({ tickets: [...res.ticket] })
        }


        // toggle show button
        const showResolvedTickets = () => {
            this.setState({ showResolved: !showResolved })
        }



        if (filtered !== null) {
            return (
                <DefaultLayout>
                    <div className='ticket-container'>
                        <Row>
                            <Col>
                                <h1>Ticket Lists Page</h1>
                            </Col>
                        </Row>
                        <Row className="mt-4 mb-4">
                            <Col>
                                <Link to="/add-ticket">
                                    <Button variant="info">Add New Ticket</Button>
                                </Link>
                            </Col>
                            <Col>
                                <Button variant="info" onClick={showResolvedTickets}>Show Resolved Tickets</Button>
                            </Col>
                            <Col className="text-right">
                                <SearchForm searchTicketBySubject={searchTicketBySubject} />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Subject</th>
                                            <th>Description</th>
                                            <th>Assigned To</th>
                                            <th>Priority</th>
                                            <th>Status</th>
                                            <th>Type</th>
                                            <th>Opened Date</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {getFilteredList()}
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </div>
                </DefaultLayout>
            )
        }




        return (
            <DefaultLayout>
                <div className='ticket-container'>
                    <Row>
                        <Col>
                            <h1>Ticket Lists Page</h1>
                        </Col>
                    </Row>
                    <Row className="mt-4 mb-4">
                        <Col>
                            <Link to="/add-ticket">
                                <Button variant="info">Add New Ticket</Button>
                            </Link>
                        </Col>
                        <Col>
                            <Button variant="info" onClick={showResolvedTickets}>Show Resolved Tickets</Button>
                        </Col>
                        <Col className="text-right">
                            <SearchForm searchTicketBySubject={searchTicketBySubject} />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Subject</th>
                                        <th>Description</th>
                                        <th>Assigned To</th>
                                        <th>Priority</th>
                                        <th>Status</th>
                                        <th>Type</th>
                                        <th>Opened Date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {getOpenList()}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>

                </div>



                {showResolved && <div className='resolved-ticket-container'>
                    <Row className='mb-3'>
                        <Col>
                            <h3>Resolved Tickets</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Subject</th>
                                        <th>Description</th>
                                        <th>Assigned To</th>
                                        <th>Priority</th>
                                        <th>Status</th>
                                        <th>Type</th>
                                        <th>Opened Date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {getResolvedList()}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </div>}
            </DefaultLayout>
        )
    }
}

export default Tickets;
