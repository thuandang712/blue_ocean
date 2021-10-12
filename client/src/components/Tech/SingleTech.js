import React from 'react';
// import EditTech from './EditTech';


class SingleTech extends React.Component {

    state = {
        isEditing: false
    }

    render() {
        const { singleTech, changeLoadingAndSingleTech, editTech } = this.props

        const handleStateChange = () => {
            changeLoadingAndSingleTech()
        }

        const handleEditChange = () => {
            this.setState({ isEditing: !this.state.isEditing })
        }

        const buttonText = (this.state.isEditing) ? "Cancel Edit" : "Edit Tech"
        return (
            <div className="techContainer">
                {/* <button onClick={handleStateChange}>Back to Techs</button>
            { !this.state.isEditing && <center>
            <h1>{singleTech[0].first_name} {singleTech[0].last_name}</h1>
            <h2>Contact: </h2>
            <h3>phone: {singleTech[0].phone_number} / email: {singleTech[0].email}!</h3>
            </center>}
            { this.state.isEditing && <EditTech editTrainer={editTech} singleTrainer={singleTech}/>}
            <button onClick={handleEditChange}>{buttonText}</button> */}
            </div>
        )
    }
}


export default SingleTech