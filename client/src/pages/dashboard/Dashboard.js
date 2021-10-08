import React from 'react'
import { Container, ListGroup } from 'react-bootstrap'

const Dashboard = () => {
    return (
        <Container>
            <ListGroup variant="flush" className='mt-5'>
                <ListGroup.Item variant="primary">Total Tech: </ListGroup.Item>
                <ListGroup.Item variant="secondary">Total Tickets: </ListGroup.Item>
                <ListGroup.Item variant="warning">Pending Tickets: </ListGroup.Item>
                <ListGroup.Item variant="info">Tech Available: </ListGroup.Item>
            </ListGroup>
        </Container>
    )
}

export default Dashboard
