# Blue-Ocean Ticket Tracker Project

## Introduction

The premise of the project is to create a client relational manager (CRM) that assists
management in the assignment of “tickets”. Tickets are received as employee technical issues
within the organization. Our application helps to manage the inflow of tickets and allows
management to assign tickets to an employee. This project was created using the MERN stack.

● To view the entire project please visit:
https://blue-ocean-ticketing-system.herokuapp.com

● To see the code for the project please visit:

https://github.com/thuandang712/blue_ocean
Login: admin@gmail.com
Password: admin123456!@#$%^
Project Structure

### I. Login

The project opens to a login page. The only functionality on this page is the ability to login.
Since the project was designed for an employer to manage tasks internal to the company, our
team determined it wasn’t necessary to have any pages prior to “login”.

### II. Admin Login

This next page you will see is an admin login page. Here you may only enter the email and
password we have created.

### III. Dashboard

![Screenshot (1228)](https://user-images.githubusercontent.com/85899437/138168822-ee00e372-3a2e-4975-bee9-258240928cf1.png)

This page will display three charts that accurately reflect and are designed to assist the admin in
establishing priorities, and make decisions about what problems are facing the company
internally.

### III. Tech

![Screenshot (1229)](https://user-images.githubusercontent.com/85899437/138168959-5eaca00f-d2ab-47dc-8851-9ad989fe9a30.png)

This tech page allows the administrator to create, update and delete information about
technicians within the organization. This will enable administrators to adjust the technicians that
work for the company. In an ideal situation this information would be pulled from some type of
database within the company's HR database, and would make API calls as the database is
updated. Within the scope of our project we did not have any previously established API data to
pull from.

### IV. Ticket

![Screenshot (1230)](https://user-images.githubusercontent.com/85899437/138168892-0a2c03fc-de4e-4a01-9320-f0f77d5b82b6.png)

The ticket page enables the administrator to see all of the tickets that are currently open within
the organization. The headers and critical details for the tickets are as follows:
Subject - Gives a brief description of what needs to be accomplished
Description - Provides details for the technician to follow
Assigned - Informs the administrator what technician is assigned to what job
Priority - Allows the manager to set priorities based on urgency
Status - Provides a tracking mechanism to see where project currently is
Type - Categorizes the project to help track data
Open Date - Displays the time the request for the ticket was input into the system
Actions - Enables the administrator to make edits to the request

### V. Logout

Ends the session for the administrator, returns back to the login page.
Build Status
The project has full CRUD functionality on both creating tickets and creating technicians.
Installation
To begin: Fork and Clone the project into your preferred IDE
To install the project access the client folder then:
NPM Init
NPM run start
This will start the front-end portion of the application (React Js)
Access the entire project folder then:
NPM init
NPM run server
This will start the back-end portion of the application (Mongo DB)
API References
Since we did not have any API data to pull from, we created our own API for each critical page
of the project. All API code can be found through this directory:
BLUE_OCEAN > client > src > api


## Potential Future Application

The future of this application has the potential to scale far past the intention it was created with.
Since we are collecting data regarding problems within the company. This data can be used to
predict problems that will arise in the future. If machine learning technology are implemented in
the application in the future we can reasonably predict when employees will run into issues with
their technology, and make purchase decisions based around which products and
manufacturers provide the best quality products.
