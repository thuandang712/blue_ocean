import React from 'react'
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


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
                                <Link to={`/ticket/${row._id}/edit`}><Button className='edit-btn' variant="outline-primary" size='sm'>Edit</Button></Link>
                                <br></br>
                                <Link to='#'>
                                    <Button className='delete-btn' variant="outline-danger" size='sm' onClick={() => {
                                        if (window.confirm('Are you sure you want to delete this ticket?'))
                                            deleteTicket(row._id)
                                    }}
                                    >Delete</Button>
                                </Link>
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
                                <Link to={`/ticket/edit/${row._id}`}><Button className='edit-btn' variant="outline-primary" size='sm'>Edit</Button></Link>
                                <br></br>
                                <Link to='#'>
                                    <Button className='delete-btn' variant="outline-danger" size='sm' onClick={() => {
                                        if (window.confirm('Are you sure you want to delete this ticket?'))
                                            deleteTicket(row._id)
                                    }}
                                    >Delete</Button>
                                </Link>
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
