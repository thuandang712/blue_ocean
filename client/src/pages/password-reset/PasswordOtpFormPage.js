import React from "react";
import { useSelector } from "react-redux";

import { Jumbotron } from "react-bootstrap";
import { ResetPassword } from "../../components/password-reset/passwordResetComponent";
import UpdatePasswordFormComponent from "../../components/password-reset/updatePasswordFormComponent";

import "./PasswordOtpForm.style.css";


const PasswordOtpForm = () => {
    const { showUpdatePassForm } = useSelector(state => state.password);

    return (
        <div className="entry-page bg-info">
            <Jumbotron className="form-box">
                {showUpdatePassForm ? <UpdatePasswordFormComponent /> : <ResetPassword />}
                <div className="text-center">
                    <a href="/">Login Now</a>
                </div>
            </Jumbotron>
        </div>
    );
};

export default PasswordOtpForm;
