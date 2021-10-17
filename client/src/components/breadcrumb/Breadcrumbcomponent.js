import React from "react";
import { Breadcrumb } from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"

export const PageBreadCrumb = ({ page }) => {
    return (
        <Breadcrumb>
            <linkContainer to="/">
                <Breadcrumb.Item>Home</Breadcrumb.Item>
            </linkContainer>
            <Breadcrumb.Item active>{page}</Breadcrumb.Item>
        </Breadcrumb>
    );
};