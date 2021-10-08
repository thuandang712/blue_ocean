import React from 'react'
class addTech extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
    }

    render() {
        const { firstName, lastName, phoneNumber, email } = this.state
        const { postTech } = this.props

        const handleChange = (e) => {
            const key = e.target.name //key should be the names of the elements; firstName, lastName, phoneNumber, etc.
            const value = e.target.value
            this.setState({ [key]: value })
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            const obj = this.state
            console.log(obj)
            postTech(obj)
        }


        return (
            <center>
                <form className='add-Form' onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <label>First Name</label>
                        <input type='text' placeholder='First Name'
                            name="firstName"
                            value={firstName}
                            onChange={handleChange} />
                    </div>
                    <div className='form-control'>
                        <label>Last Name</label>
                        <input type='text' placeholder='Last Name'
                            name="lastName"
                            value={lastName}
                            onChange={handleChange} />
                    </div>
                    <div className='form-control'>
                        <label>Phone Number</label>
                        <input type="number" placeholder='Phone Number'
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={handleChange} />
                    </div>
                    <div className='form-control'>
                        <label>Email</label>
                        <input type='text' placeholder='Email'
                            name={"email"}
                            value={email}
                            onChange={handleChange} />
                    </div>
                    <button type="submit" value='Save Tech' className='btnPost' >Submit</button>
                </form>
            </center>
        )
    }
}




export default addTech