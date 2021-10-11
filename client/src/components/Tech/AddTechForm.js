import React from 'react'
import axios from 'axios'

import { Form, Jumbotron, Row, Col, Button, Spinner, Alert } from "react-bootstrap";


class AddTechForm extends React.Component {


    state = {
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        error: null,
        loading: false,
    }

    // useEffect()

    render() {

        const { first_name, last_name, phone_number, email, error, loading } = this.state


        const handleOnChange = (e) => {
            const key = e.target.name
            const value = e.target.value
            this.setState({ [key]: value })
        }


        const handleOnSubmit = async (e) => {
            e.preventDefault();
            // handleError()
            // setTimeout(() => { this.setState({ error: null }) }, 5000)


            const formData = { first_name, last_name, phone_number, email } // key has to match with db


            // if (!first_name || !last_name || !phone_number || !email) {
            //     this.setState({ error: true })
            // }

            // this.setState({ error: null })


            this.setState({ loading: true })


            // check duplicate email
            // make a get request to check email 
            const res = await axios.get("http://localhost:5000/api/tech", {
                headers: {
                    Authorization: sessionStorage.getItem("accessJWT"),
                }
            })

            res.data.tech.map(tech => {
                if (email === tech.email) {
                    return alert('Email has been taken. Please choose a different one.')
                }
                return tech
            })

            this.setState({ loading: false })

            // end the process



            // otherwise, make post request

            this.setState({ loading: true })

            // POST request to /api/tech/ with authorization header
            const tech = await axios.post("http://localhost:5000/api/tech", formData, {
                headers: {
                    Authorization: sessionStorage.getItem("accessJWT"),
                }
            })

            console.log(tech.data)

            if (tech.data.status === "error") {
                return alert(tech.data.message)
            }

            alert(tech.data.message)


            this.setState({ loading: false })


        }



        return (
            <Jumbotron className="mt-3 add-new-ticket bg-light">
                <h1 className="text-info text-center">Add New Ticket</h1>
                <hr />
                <div>
                    {error && <Alert variant="danger">Please fill out the required fields.</Alert>}
                    {/* {successMsg && <Alert variant="primary">{successMsg}</Alert>} */}
                    {loading && <Spinner variant="primary" animation="border" />}
                </div>
                <Form autoComplete="off" onSubmit={handleOnSubmit}>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>First Name</Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                name="first_name"
                                value={first_name}
                                maxLength="50"
                                onChange={handleOnChange}
                                placeholder="First Name"
                                required
                            />
                            <Form.Text className="text-danger">
                                {/* {frmDataErro.subject && "First name is required!"} */}
                            </Form.Text>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Last Name</Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                name="last_name"
                                value={last_name}
                                maxLength="50"
                                onChange={handleOnChange}
                                placeholder="Last Name"
                                required
                            />
                            <Form.Text className="text-danger">
                                {/* {frmDataErro.subject && "Last name is required!"} */}
                            </Form.Text>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Phone Number</Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                name="phone_number"
                                value={phone_number}
                                maxLength="11"
                                onChange={handleOnChange}
                                placeholder="Phone Number"
                                required
                            />
                            <Form.Text className="text-danger">
                                {/* {frmDataErro.subject && "Phone number is required!"} */}
                            </Form.Text>
                        </Col>
                    </Form.Group>


                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Email</Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                type="email"
                                name="email"
                                value={email}
                                maxLength="50"
                                onChange={handleOnChange}
                                placeholder="Email"
                                required
                            />
                            <Form.Text className="text-danger">
                                {/* {frmDataErro.subject && "Email is required!"} */}
                            </Form.Text>
                        </Col>
                    </Form.Group>


                    <Button type="submit" variant="info" block>
                        Add Tech
                    </Button>
                </Form>
            </Jumbotron>
        )
    }
}




export default AddTechForm