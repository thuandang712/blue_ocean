import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
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
        filtered: null
    }


    async componentDidMount() {
        this.setState({ loading: true })
        const res = await fetchTicket()
        this.setState({ tickets: res.ticket })
        this.setState({ loading: false })
    }


    render() {
        const { tickets, filtered } = this.state


        // delete ticket
        const deleteTicket = async (_id) => {
            // Delete in DB
            await deleteSingleTicket(_id)
            const res = await fetchTicket()
            this.setState({ tickets: [...res.ticket] })
            // Filter UI data THIS WILL NOT DELETE IN DB
            // this.setState({ techs: this.state.techs.filter(tech => tech._id !== _id) })
        }


        // search function 
        const searchTicketBySubject = (text) => {
            let filteredList = tickets.filter(ticket => {
                let regexp = new RegExp(text, 'gi')
                return ticket.subject.match(regexp)
            })
            this.setState({ filtered: filteredList })
        }


        return (
            <DefaultLayout>
                <Container>
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
                        <Col className="text-right">
                            <SearchForm searchTicketBySubject={searchTicketBySubject} />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <TicketTable tickets={tickets} filtered={filtered} deleteTicket={deleteTicket} />
                        </Col>
                    </Row>
                </Container>
            </DefaultLayout>
        )
    }
}

export default Tickets;
