import React from 'react';
import { Card, Col, ListGroup, Button } from 'react-bootstrap'


const TechItem = ({ tech, selectSingleTech, deleteTech }) => {

    const handleClick = (e) => {
        selectSingleTech(e.target.id)
        // < Link to = "/" > Back to home page</Link >
    }

    const handleDelete = (e) => {
        if (e.target.id) {
            deleteTech(e.target.id)
        }
    }


    return (
        <Col>
            <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item onClick={handleClick} id={tech._id}>{`${tech.first_name} ${tech.last_name}`}</ListGroup.Item>
                    <ListGroup.Item>Phone: {tech.phone_number}</ListGroup.Item>
                    <ListGroup.Item>Email: {tech.email}</ListGroup.Item>
                </ListGroup>
                <Button className='delete-btn w-50' size='sm' variant="outline-danger"
                    id={tech._id} onClick={handleDelete}>Delete
                </Button>
            </Card>
        </Col >
    )
}


export default TechItem