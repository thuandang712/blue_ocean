import React from 'react';
import { Card, Col, ListGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import { FaTrash, FaEdit } from 'react-icons/fa'



const TechItem = ({ tech, deleteTech }) => {

    const handleDelete = (e) => {
        if (window.confirm('Are you sure you want to delete this tech?')) {
            deleteTech(e.target.id)
        }
    }


    return (
        <Col>
            <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item className='tech-name'>{`${tech.first_name} ${tech.last_name}`}</ListGroup.Item>
                    <ListGroup.Item className='tech-phone'><BsFillTelephoneFill /> {tech.phone_number}</ListGroup.Item>
                    <ListGroup.Item className='tech-mail'><FiMail /> {tech.email}</ListGroup.Item>
                    <ListGroup.Item className='tech-action ms-auto'>
                        <Link to='#'>
                            <Button className='delete-btn' size='sm' variant="outline-danger"
                                id={tech._id} onClick={handleDelete}>
                                <FaTrash />
                            </Button>
                        </Link>

                        <Link to={`/tech/edit/${tech._id}`}>
                            <Button className='edit-btn' size='sm' variant="outline-success">
                                <FaEdit />
                            </Button>
                        </Link>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col >
    )
}


export default TechItem


