import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import DefaultLayout from '../../layout/DefaultLayout'
import StatusChart from '../../components/charts/StatusChart'
import PriorityChart from '../../components/charts/PriorityChart'
import TypeChart from '../../components/charts/TypeChart'

const Dashboard = () => {

    return (
        <DefaultLayout>
            <Container>
                <Row>
                    <Col>
                        <h3>Tickets by Status</h3>
                        <StatusChart />
                    </Col>
                    <Col>
                        <h3>Tickets by Priority</h3>
                        <PriorityChart />
                    </Col>
                    <Col className='mt-5 mb-5'>
                        <h3>Tickets by Type</h3>
                        <div><TypeChart /></div>
                    </Col>
                </Row>

            </Container>
        </DefaultLayout>
    )

}

export default Dashboard
