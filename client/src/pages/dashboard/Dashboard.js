import React from 'react'
import { Row, Col } from 'react-bootstrap'
import DefaultLayout from '../../layout/DefaultLayout'
import StatusChart from '../../components/charts/StatusChart'
import PriorityChart from '../../components/charts/PriorityChart'
import TypeChart from '../../components/charts/TypeChart'

const Dashboard = () => {

    return (
        <DefaultLayout>
            <div className='dashBoard'>
                <center>
                    <Row>
                        <Col>
                            <h3 className="graphTitle">Tickets by Status</h3>
                            <StatusChart />
                        </Col>
                        <Col>
                            <h3 className="graphTitle">Tickets by Priority</h3>
                            <PriorityChart />
                        </Col>
                        <Col>
                            <h3 className="graphTitle">Tickets by Type</h3>
                            <TypeChart />
                        </Col>
                    </Row>
                </center>
            </div>
        </DefaultLayout>
    )
}

export default Dashboard
