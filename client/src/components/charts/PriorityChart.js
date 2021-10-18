import React, { Component } from 'react';
import { fetchTicket } from '../../api/ticket.api';
import { Bar } from 'react-chartjs-2';

const labels = ['Low', 'Medium', 'High'];
const barPercentage = '0.5';
const backgroundColor = ['lightgreen', 'moccasin', 'crimson'];

const options = {
    plugins: { legend: false },
    maintainAspectRatio: false,
    responsive: false,
    scales: {
        yAxes: [{
            "ticks": {
                "beginAtZero": true
            }
        }]
    }
}


export default class PriorityChart extends Component {
    constructor(props) {
        super(props);

        this.low = 0;
        this.medium = 0;
        this.high = 0;

        this.state = {
            tickets: [],
            data: {
                labels: labels,
                datasets: [{
                    data: [0, 0, 0],
                    barPercentage: barPercentage,
                    backgroundColor: backgroundColor
                }],
            }
        };
    }

    async componentDidMount() {
        const res = await fetchTicket()
        this.setState({ tickets: res.ticket })

        this.state.tickets.map(ticket => {
            // get number of each priority and update state data
            if (ticket.status !== 'Resolved') {
                switch (ticket.priority) {
                    case 'Low':
                        this.low++;
                        break;
                    case 'Medium':
                        this.medium++;
                        break;
                    case 'High':
                        this.high++;
                        break;
                    default:
                        break;
                }
            }
            this.setState({
                data: {
                    datasets: [{
                        data: [this.low, this.medium, this.high]
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
                <Bar
                    data={data}
                    options={options}
                    height={350}
                    width={500} />
            </div>
        );
    }
}