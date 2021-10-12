import React from 'react';
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-bootstrap'

const TechItem = ({ tech, selectSingleTech }) => {

    const handleClick = (e) => {
        selectSingleTech(e.target.id)
        // < Link to = "/" > Back to home page</Link >
    }

    return (
        <Col>
            <Card>
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                    <Card.Title onClick={handleClick} id={tech._id}>
                        {`${tech.first_name} ${tech.last_name}`}
                    </Card.Title>
                    <hr />
                    <Card.Text >
                        Phone: {tech.phone_number}
                        <br />
                        Email: {tech.email}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col >
    )
}


export default TechItem