import React from 'react'
import { Col, Card, ListGroup } from 'react-bootstrap'


const AssignTech = ({ tech, assignTicketToTech }) => {

    const handleClick = (e) => {
        assignTicketToTech(e.target.id)
    }

    return (
        <Col>
            <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item onClick={handleClick} id={tech._id}>{`${tech.first_name} ${tech.last_name}`}</ListGroup.Item>
                </ListGroup>
            </Card>
        </Col >
    )
}

export default AssignTech
