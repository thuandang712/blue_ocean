import React from 'react';
import TechItem from './TechItem';
import axios from 'axios'


import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchForm from '../search-form/SearchForm';



class Tech extends React.Component {

    state = {
        loading: false,
        techs: [],
        singleTech: null
    }

    async componentDidMount() {
        this.setState({ loading: true })

        const techs = await axios.get("http://localhost:5000/api/tech", {
            headers: {
                Authorization: sessionStorage.getItem("accessJWT"),
            }
        })


        this.setState({ techs: techs.data.tech })
        this.setState({ loading: false })
    }


    render() {
        const { techs } = this.state

        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h1>Tech Lists Page</h1>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col>
                            <Link to="/add-tech">
                                <Button variant="info">Add New Tech</Button>
                            </Link>
                        </Col>
                        <Col className="text-right">
                            <SearchForm />
                        </Col>
                    </Row>

                    <Row xs={1} md={3} className="g-5 mt-2">
                        {techs.length ? (
                            techs.map(tech => (
                                <TechItem key={tech._id} tech={tech} />
                            ))
                        ) : (
                            <h1>No Tech Found!</h1>
                        )}
                    </Row>
                </Container>

            </div>
        )
    };
}

export default Tech