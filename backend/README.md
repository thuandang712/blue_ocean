# Blue_Ocean Ticketing System Backend RESTful API


## How to use



Note: Make sure you have nodemon is installed in your system otherwise you can install as a dev dependencies in the project.

## API Resources

### User API Resources

All the user API router follows `/api/user/`

| #   | Routers                   | HTTP   | Progress | Is Private | Description                                      |
| --- | ------------------------- | ------ | -------- | ---------- | ------------------------------------------------ |
| 1   | `/api/user`                | GET    | Working | Yes        | Get user Info                                    |
| 2   | `/api/user`                | POST   | Working | No         | Create a user                                    |
| 3   | `/api/user/login`          | POST   | Not started | No         | Verify user Authentication and return JWT        |
| 4   | `/api/user/reset-password` | POST   | Not started | No         | Verify email and email pin to reset the password |
| 5   | `/api/user/reset-password` | PATCH  | Not started | No         | Replace with new password                        |
| 6   | `/api/user/logout`         | DELETE | Not started | Yes        | Delete user accessJWT                            |

### Ticket API Resources

All the user API router follows `/api/ticket/`

| #   | Routers                        | HTTP | Progress | Is Private | Description                             |
| --- | ------------------------------ | ----- | ------------ | ---------- | --------------------------------------- |
| 1   | `/api/ticket`                   | GET   | Not started | Yes        | Get all ticket for the logined in user  |
| 2   | `/api/ticket/{id}`              | GET   | Not started | Yes        | Get a ticket details                    |
| 3   | `/api/ticket`                   | POST  | Not started | Yes        | Create a new ticket                     |
| 4   | `/api/ticket/{id}`              | PUT   | Not started | Yes        | Update ticket details ie. reply message |
| 5   | `/api/ticket/close-ticket/{id}` | PATCH | Not started | Yes        | Update ticket status to close           |
| 6   | `/api/ticket/{id}`              | DELETE | Not started | Yes        | Delete a ticket                         |

### Tokens API Resources

All the user API router follows `/v1/tokens`

| #   | Routers      | HTTP | Progress | Is Private | Description            |
| --- | ------------ | ----- | -------- | ---------- | ---------------------- |
| 1   | `/api/tokens` | GET   | Not started     | No         | Get a fresh access JWT |
