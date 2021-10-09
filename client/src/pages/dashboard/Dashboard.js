import React from 'react'
import { Container, ListGroup } from 'react-bootstrap'

const Dashboard = () => {
    return (
        <Container>
            <ListGroup variant="flush" className='mt-5'>
                <ListGroup.Item >Total Tech: </ListGroup.Item>
                <ListGroup.Item >Total Tickets: </ListGroup.Item>
                <ListGroup.Item >Pending Tickets: </ListGroup.Item>
                <ListGroup.Item >Tech Available: </ListGroup.Item>
            </ListGroup>
        </Container>
    )
}

export default Dashboard
