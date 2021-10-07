import React from 'react';
import TechItem from './TechItem'; 


class Tech extends React.Component {
    render() {
        const{getTech, techs, deleteTech} = this.props


        return (
            <div>
                {techs.map((tech) => (
                    <TechItem tech={tech} key={tech.tech_id} getTech={getTech} deleteTrainer={deleteTech}/>
                ))}
            </div>
        )
    };
}

export default Tech