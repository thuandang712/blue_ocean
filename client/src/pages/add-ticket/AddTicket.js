import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddTicketForm from '../../components/tech/AddTechForm'


const AddTicket = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <AddTicketForm />
                </Col>
            </Row>
        </Container>
    );
};

export default AddTicket