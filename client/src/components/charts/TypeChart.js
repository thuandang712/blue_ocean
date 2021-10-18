import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { fetchTicket } from '../../api/ticket.api';

const backgroundColor = ['aquamarine', 'burlywood', 'firebrick', 'gray'];
const labels = ['Bug/Error', 'Feature Request', 'Security', 'Other'];
const options = {
    maintainAspectRatio: false,
    responsive: false,
}

export default class TypeChart extends Component {
    constructor(props) {
        super(props);

        this.bug = 0;
        this.feature = 0;
        this.security = 0;
        this.other = 0;

        this.state = {
            tickets: [],
            data: {
                labels: labels,

                datasets: [{
                    data: [0, 0, 0, 0],
                    backgroundColor: backgroundColor
                }],
            }
        };
    }

    async componentDidMount() {
        const res = await fetchTicket()
        this.setState({ tickets: res.ticket })

        this.state.tickets.map(ticket => {
            // get number of each type and update state data
            if (ticket.status !== 'Resolved') {
                switch (ticket.type) {
                    case 'Bug/Error':
                        this.bug++;
                        break;
                    case 'Feature Request':
                        this.feature++;
                        break;
                    case 'Security':
                        this.security++;
                        break;
                    case 'Other':
                        this.other++;
                        break;
                    default:
                        break;
                }
            }

            this.setState({
                data: {
                    datasets: [{
                        data: [this.bug, this.feature, this.security, this.other]
                    }]
                }
            });
            return 0
        });
    }

    render() {
        const { data } = this.state
        return (
            <div>
                <Doughnut
                    data={data}
                    options={options}
                    height={300}
                    width={500} />
            </div>
        );
    }
}