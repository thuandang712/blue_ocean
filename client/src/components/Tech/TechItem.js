import React from 'react';


class TechItem extends React.Component {
    render() {
        const {trainer, getTech, deleteTech} = this.props

        const handleDeleteTech = (e) => {
            console.log(e.target.id)
            deleteTech(parseInt(e.target.id))
        }
        
        
        const handleGetTech = (e) => {
            getTech(e.target.id)
        }

        return(
            <div className="container">
                <button className = "deleteButton" id={trainer.trainer_id} onClick= {handleDeleteTech}>Delete</button>
                <h1 className="listItem" onClick={handleGetTech} id={tech.tech_id}>{tech.first_name} {tech.last_name}</h1>
                <p>{`Comm: ${tech.phone_number}`}</p>
                <p>{`Comm: ${tech.email}`}</p>
            </div>
        )
    }
}

export default TechItem