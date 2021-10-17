import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

import { fetchTicket, fetchSingleTicket, deleteSingleTicket } from '../../api/ticket.api';

import SearchForm from '../search-form/SearchForm'
import TicketTable from './TicketTable'
import "./tickets.css"



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

        // select single ticket 
        const selectSingleTicket = async (_id) => {
            console.log(_id)
            const res = await fetchSingleTicket(_id)
            console.log(res)
            this.setState({ singleTicket: res.data })
            // FILTER reviews belongs to the single trainer
            // const resReviews = await axios.get("http://localhost:5500/api/comments")
            // const rev = resReviews.data.filter(review => review.trainer_id === parseInt(id))
            // this.setState({ reviews: rev })
        }


        // clear single trainer 
        // const clearSingleTech = () => {
        //     this.setState({ singleTrainer: null })
        // }

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
        )
    }
}

export default Tickets;
