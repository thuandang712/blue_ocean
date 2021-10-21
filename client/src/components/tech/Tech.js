import React from 'react';
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchTech, deleteSingleTech } from '../../api/tech.api';
import DefaultLayout from '../../layout/DefaultLayout';
import TechItem from './TechItem';



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
            <DefaultLayout>
                <div className='tech-container'>
                    <Row>
                        <Col sm={10}>
                            <h1 className='tech-title'>Tech List</h1>
                        </Col>

                        <Col>
                            <Link to="/add-tech">
                                <Button variant="info">Add New Tech</Button>
                            </Link>
                        </Col>
                    </Row>

                    <Row xs={1} md={3} className="g-5 mt-1">
                        {techs.length ? (
                            techs.map(tech => (
                                <TechItem key={tech._id} tech={tech} deleteTech={deleteTech} />
                            ))
                        ) : (
                            <h1>No Tech Found!</h1>
                        )}
                    </Row>
                </div>
            </DefaultLayout>
        )
    };
}

export default Tech