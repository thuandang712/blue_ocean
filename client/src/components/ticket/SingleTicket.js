import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Card, ListGroup } from "react-bootstrap";
import { fetchSingleTicket } from '../../api/ticket.api';
import { fetchTech } from '../../api/tech.api';
import { useParams } from "react-router-dom";
import AssignTech from '../tech/AssignTech';

const SingleTicket = () => {
    const { _id } = useParams()
    const [singleTicket, setSingleTicket] = useState({})
    const [techs, setTechs] = useState([])


    useEffect(() => {
        async function getData() {
            try {
                const res = await fetchSingleTicket(_id)
                return res
            } catch (error) {
                console.log(error)
            }
        }

        getData().then((data) => {
            setSingleTicket(data.ticket)
        })

    }, [_id])


    const handleAssign = async () => {
        // populate all tech with 
        const res = await fetchTech()
        setTechs(res.tech)




        // add tickets to tech 
        // get ticket id 
        // find by ID and update  ticket  { tech: tech._id }

    }


    const assignTicketToTech = async (techId) => {
        // const ticketId = _id


        // fetch single tech 
        // const { tech } = await fetchSingleTech(techId)
        // tech.tickets.push(ticketId)
        // const obj = { ticketId: ticketId, status: 'Working' }
        // console.log(obj)
        // // find by ID and update tech schema
        // const res = await updateTicketArrayInTech(techId, obj)
        // console.log(res)
        // call api to this single tech
    }



    return (

        <Container>
            <Row>
                <Col>
                    <h1>Single Ticket Page</h1>
                </Col>
            </Row>


            <Row>
                <Col className="text-weight-bolder text-secondary">

                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item id={singleTicket._id}>Subject: {`${singleTicket.subject}`}</ListGroup.Item>
                            <ListGroup.Item>Sender: {singleTicket.sender}</ListGroup.Item>
                            <ListGroup.Item>Status: {singleTicket.status}</ListGroup.Item>
                            <ListGroup.Item>Message: {singleTicket.message}</ListGroup.Item>
                        </ListGroup>
                        {/* <Button className='delete-btn w-50' size='sm' variant="outline-danger"
                                id={tech._id} onClick={handleDelete}>Delete
                            </Button> */}
                    </Card>

                </Col>


                <Col className="text-right">
                    <Button variant="outline-info"
                        onClick={handleAssign}
                    >Assign</Button>
                </Col>
            </Row>

            <hr />


            <Row xs={1} md={3} className="g-5 mt-2">
                {techs.map(tech => (
                    <AssignTech key={tech._id} tech={tech} assignTicketToTech={assignTicketToTech} />
                ))}
            </Row>
        </Container>

    )

}


export default SingleTicket
