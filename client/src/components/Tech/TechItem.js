import React from 'react';
import { Card, Col } from 'react-bootstrap'

const TechItem = ({ tech }) => {

    return (
        <Col>
            <Card>
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                    <Card.Title>{`${tech.first_name} ${tech.last_name}`}</Card.Title>
                    <Card.Text>
                        Phone: {tech.phone_number}
                        <br />
                        Email: {tech.email}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}


export default TechItem