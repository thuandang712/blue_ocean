import React from 'react';
import { Card, Col, ListGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TechItem = ({ tech, deleteTech, editTech }) => {

    const handleDelete = (e) => {
        if (e.target.id && window.confirm('Are you sure you want to delete this tech?')) {
            deleteTech(e.target.id)
        }
    }


    return (
        <Col>
            <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item>{`${tech.first_name} ${tech.last_name}`}</ListGroup.Item>
                    <ListGroup.Item>Phone: {tech.phone_number}</ListGroup.Item>
                    <ListGroup.Item>Email: {tech.email}</ListGroup.Item>
                </ListGroup>
                <Button className='delete-btn w-50' size='sm' variant="outline-danger"
                    id={tech._id} onClick={handleDelete}>Delete
                </Button>

                <Link to={`/tech/edit/${tech._id}`}>
                    <Button className='edit-btn w-50' size='sm' variant="outline-success">Edit</Button>
                </Link>
            </Card>
        </Col >
    )
}


export default TechItem