import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { fetchTech, fetchSingleTech, deleteSingleTech } from '../../api/tech.api';

import TechItem from './TechItem';
import SearchForm from '../search-form/SearchForm';



class Tech extends React.Component {

    state = {
        loading: false,
        techs: [],
        singleTech: null
    }

    async componentDidMount() {
        this.setState({ loading: true })
        const res = await fetchTech()
        this.setState({ techs: res.tech })
        this.setState({ loading: false })
    }



    render() {
        const { techs } = this.state


        // select single trainer 
        const selectSingleTech = async (_id) => {
            console.log(_id)
            const res = await fetchSingleTech(_id)
            console.log(res)
            // this.setState({ singleTrainer: res.data })
            // FILTER reviews belongs to the single trainer
            // const resReviews = await axios.get("http://localhost:5500/api/comments")
            // const rev = resReviews.data.filter(review => review.trainer_id === parseInt(id))
            // this.setState({ reviews: rev })
        }


        // clear single trainer 
        // const clearSingleTech = () => {
        //     this.setState({ singleTrainer: null })
        // }

        // delete tech
        const deleteTech = async (_id) => {
            // Delete in DB
            await deleteSingleTech(_id)
            const res = await fetchTech()
            this.setState({ techs: [...res.tech] })

            // Filter UI data THIS WILL NOT DELETE IN DB
            // this.setState({ techs: this.state.techs.filter(tech => tech._id !== _id) })
        }


        return (
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
                            <TechItem key={tech._id} tech={tech} selectSingleTech={selectSingleTech} deleteTech={deleteTech} />
                        ))
                    ) : (
                        <h1>No Tech Found!</h1>
                    )}
                </Row>
            </Container>
        )
    };
}

export default Tech