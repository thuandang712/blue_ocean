import React from 'react'
import { Button } from 'react-bootstrap'


const MarkButton = ({ ticketID, status }) => {

    const handleClick = (e) => {
        console.log(e.target.id)
        // e.preventDefault()
        status !== 'Resolved' ? status = 'Resolved' : status = 'Open'
    }


    return (
        status !== 'Resolved' ?
            <Button onClick={handleClick} variant="outline-success" size='sm'>Mark as Resolved</Button> :
            <Button onClick={handleClick} variant="outline-success" size='sm'>Mark as Open</Button>
    )
}

export default MarkButton
