// import React, { useEffect, useState } from 'react'
// import { Button } from 'react-bootstrap'
// import { fetchSingleTicket } from '../../api/ticket.api'

// const MarkButton = ({ tickets }) => {



//     const handleClick = async (e) => {
//         e.preventDefault()
//         console.log(e.target.id)

//         try {
//             // GET req to /:id/ticket
//             const res = await fetchSingleTicket(e.target.id)

//             if (res.ticket.status !== 'Resolved') {
//                 // PATCH req to /:_id/status/resolved
//                 const res = await updateTicketStatusToResolved(e.target.id)

//                 setStatus('Resolved')
//             } else {
//                 // PATCH req to /:_id/status/open 
//                 await updateTicketStatusToOpen(e.target.id)
//                 setStatus('Open')
//             }

//         } catch (error) {
//             console.log(error)
//         }
//     }


//     return (
//         tickets.status !== 'Resolved' ?
//             <Button id={1} onClick={handleClick} variant="outline-success" size='sm'>Mark as Resolved</Button> :
//             <Button id={2} onClick={handleClick} variant="outline-success" size='sm'>Mark as Open</Button>
//     )
// }

// export default MarkButton
