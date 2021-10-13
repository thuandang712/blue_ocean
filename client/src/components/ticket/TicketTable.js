import React from 'react'
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";


const TicketTable = ({ tickets }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Subject</th>
                    <th>Status</th>
                    <th>Sender</th>
                    <th>Message</th>
                    <th>Opened Date</th>
                </tr>
            </thead>
            <tbody>
                {tickets.length ? (
                    tickets.map((row) => (
                        <tr key={row._id}>
                            <td>{row._id}</td>
                            <td>
                                <Link to={`/ticket/${row._id}`}>{row.subject}</Link>
                            </td>
                            <td>{row.status}</td>
                            <td>{row.sender}</td>
                            <td>{row.message}</td>
                            <td>{row.createdAt && new Date(row.createdAt).toLocaleString()}</td>
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
