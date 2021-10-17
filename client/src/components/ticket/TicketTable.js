import React from 'react'
import MarkButton from './MarkButton'
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap'



const priorityLevel = (lvl) => {
    switch (lvl) {
        case 'Low':
            return <td className="low-priority">{lvl}</td>;
        case 'Medium':
            return <td className="med-priority">{lvl}</td>;
        case 'High':
            return <td className="high-priority">{lvl}</td>;
        default:
            return <td>{lvl}</td>;
    }
}

const TicketTable = ({ tickets, filtered, deleteTicket }) => {

    const handleChangeStatus = (e) => {
        e.preventDefault()
        console.log(e.target.id)
        // console.log(tickets.filter(row => row._id = e.target.id))

        // row.status !== 'Resolved' ? row.status = 'Resolved' : row.status = 'Open'



    }



    if (filtered !== null) {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Description</th>
                        <th>Assigned To</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Type</th>
                        <th>Opened Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.map((row) => (
                        <tr key={row._id}>
                            <td>{row.subject}</td>
                            <td>{row.description}</td>
                            <td>{row.assignee}</td>
                            {priorityLevel(row.priority)}
                            <td>{row.status}</td>
                            <td>{row.type}</td>
                            <td>{row.createdAt && new Date(row.createdAt).toLocaleString()}</td>
                            <td>
                                <Link to={`/ticket/${row._id}`}>Edit</Link>
                                <br></br>
                                {/* <a href="#" onClick={() => {
                                    if (window.confirm('Are you sure you want to delete this ticket?'))
                                        this.props.deleteTicket(this.props.ticket._id)
                                }}
                                >Delete</a> */}
                                <br></br>

                                {/* <MarkButton
                                    mark={this.props.ticket.status}
                                    ticketID={this.props.ticket._id}
                                /> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )
    }



    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Subject</th>
                    <th>Description</th>
                    <th>Assigned To</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Type</th>
                    <th>Opened Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {tickets.length ? (
                    tickets.map((row) => (
                        <tr key={row._id}>
                            <td>{row.subject}</td>
                            <td>{row.description}</td>
                            <td>{row.assignee}</td>
                            {priorityLevel(row.priority)}
                            <td>{row.status}</td>
                            <td>{row.type}</td>
                            <td>{row.createdAt && new Date(row.createdAt).toLocaleString()}</td>
                            <td>
                                <Link to={`/ticket/${row._id}`}><Button className='edit-btn' variant="outline-primary" size='sm'>Edit</Button></Link>

                                <br></br>

                                <Link to='#'>
                                    <Button className='delete-btn' variant="outline-danger" size='sm' onClick={() => {
                                        if (window.confirm('Are you sure you want to delete this ticket?'))
                                            deleteTicket(row._id)
                                    }}
                                    >Delete</Button>
                                </Link>

                                <br></br>

                                {row.status !== 'Resolved' ?
                                    <Button id={row._id} onClick={handleChangeStatus} variant="outline-success" size='sm'>Mark as Resolved</Button> :
                                    <Button id={row._id} onClick={handleChangeStatus} variant="outline-success" size='sm'>Mark as Open</Button>}

                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4" className="text-center">
                            No ticket show{" "}
                        </td>
                    </tr>
                )}
            </tbody>
        </Table>

    )
}

export default TicketTable
