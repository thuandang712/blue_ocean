import React from "react";
import { Jumbotron } from "react-bootstrap";

import RegistrationForm from "../../components/registration-form/RegistrationFormComponent";

import "./registration.style.css";

const Registration = () => {
    return (
        <div className = "registration-page bg-info">
            <div className = "mt-5">
                <Jumbotron className="form-box">
                    <RegistrationForm />
                </Jumbotron>
            </div>
        </div>
    )
}

export default Registration; 