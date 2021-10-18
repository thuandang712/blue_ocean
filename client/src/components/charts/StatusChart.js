import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { fetchTicket } from '../../api/ticket.api';

const labels = ['Open', 'In Progress', 'Resolved'];
const backgroundColor = ['gold', 'cornflowerblue', 'darkslategray'];
const options = {
    maintainAspectRatio: false,
    responsive: false,
}



export default class StatusChart extends Component {

    constructor(props) {
        super(props);

        this.open = 0;
        this.progress = 0;
        this.resolved = 0;

        this.state = {
            tickets: [],
            data: {
                datasets: [{
                    data: [0, 0, 0],
                    backgroundColor: backgroundColor
                }],

                labels: labels
            }
        };
    }

    async componentDidMount() {
        const res = await fetchTicket()
        this.setState({ tickets: res.ticket })

        this.state.tickets.map(ticket => {
            switch (ticket.status) {
                case 'Open':
                    this.open++;
                    break;
                case 'In Progress':
                    this.progress++;
                    break;
                case 'Resolved':
                    this.resolved++;
                    break;
                default:
                    break;
            }

            this.setState({
                data: {
                    datasets: [{
                        data: [this.open, this.progress, this.resolved]
                    }]
                }
            });
            return 0
        })
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
        )
    }
}
