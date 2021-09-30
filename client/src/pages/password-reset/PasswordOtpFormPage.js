import React, {useState} from "react";
import { useSelector } from "react-redux";

import { Jumbotron } from "react-bootstrap";
import { ResetPassword } from "../../components/password-reset/passwordResetComponent";
import updatePasswordForm from "../../components/password-reset/updatePasswordFormComponent";

import "./PasswordOtpForm.style.css";
import { updatePassword } from "../../components/password-reset/passwordAction";

export const PasswordOtpForm = () => {
    const {showUpdatePassForm} = useSelector(state => state.password);

    return (
        <div className="entry-page bg-info">
            <Jumbotron className="form-box">
                {showUpdatePassForm ? <updatePasswordForm /> : <ResetPassword />}
                <div className="text-center">
                    <a href="/">Login Now</a>
                </div>
            </Jumbotron>
        </div>
    );
};