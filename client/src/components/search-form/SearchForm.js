import React from "react";

import { Form, Row, Col } from "react-bootstrap";


const SearchForm = () => {

    const handleOnChange = (e) => {
        const { value } = e.target;

        // filter search function
    };

    return (
        <div>
            <Form>
                <Form.Group as={Row}>
                    <Col >
                        <Form.Control
                            // name="searchStr"
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