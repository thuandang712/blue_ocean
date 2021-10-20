import React from 'react'
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaTrash, FaEdit } from 'react-icons/fa'


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


const TicketTable = ({ ticket, deleteTicket }) => {

    return (
        <tr>
            <td>{ticket.subject}</td>
            <td>{ticket.description}</td>
            <td>{ticket.assignee}</td>
            {priorityLevel(ticket.priority)}
            <td>{ticket.status}</td>
            <td>{ticket.type}</td>
            <td>{ticket.createdAt && new Date(ticket.createdAt).toLocaleString()}</td>
            <td>
                <Link to={`/ticket/edit/${ticket._id}`}><Button variant="outline-success" size='sm' ><FaEdit /></Button></Link>

                <Link to='#'>
                    <Button variant="outline-danger" size='sm' onClick={() => {
                        if (window.confirm('Are you sure you want to delete this ticket?'))
                            deleteTicket(ticket._id)
                    }}>
                        <FaTrash />
                    </Button>
                </Link>
            </td>
        </tr>
    )
}

export default TicketTable
