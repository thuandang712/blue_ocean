import React from "react";

import { Form, Row, Col } from "react-bootstrap";


const SearchForm = ({ searchTicketBySubject }) => {

    const handleOnChange = (e) => {
        searchTicketBySubject(e.target.value)
    };

    return (
        <div>
            <Form>
                <Form.Group as={Row}>
                    <Col >
                        <Form.Control
                            onChange={handleOnChange}
                            placeholder="Search..."
                        />
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
};

export default SearchForm