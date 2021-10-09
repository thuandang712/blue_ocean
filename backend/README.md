# Blue_Ocean Ticketing System Backend RESTful API


## How to use



Note: Make sure you have nodemon is installed in your system otherwise you can install as a dev dependencies in the project.

## API Resources

### Admin API Resources

All the user API router follows `/api/admin/`

| #   | Routers                     | HTTP   | Progress    | Is Private | Description                                      |
| --- | --------------------------- | ------ | ----------- | ---------- | ------------------------------------------------ |
| 1   | `/api/admin`                | GET    | DONE        | Yes        | Get admin Info                                   |
| 2   | `/api/admin`                | POST   | DONE        | No         | Create a admin                                   |
| 3   | `/api/admin/login`          | POST   | DONE        | No         | Verify admin Authentication and return JWT       |
| 4   | `/api/admin/reset-password` | POST   | Not started | No         | Verify email and email pin to reset the password |
| 5   | `/api/admin/reset-password` | PATCH  | Not started | No         | Replace with new password                        |
| 6   | `/api/admin/logout`         | DELETE | DONE        | Yes        | Delete admin accessJWT                           |


### Tech API Resources

All the tech API router follows `/api/tech/`

| #   | Routers                     | HTTP   | Progress | Is Private | Description                                      |
| --- | --------------------------- | ------ | -------- | ---------- | ------------------------------------------------ |
| 1   | `/api/tech`                 | GET    | DONE     | Yes        | Get all tech Info                                |
| 2   | `/api/tech/:id`             | GET    | DONE     | Yes        | Get a tech details                               |
| 3   | `/api/tech`                 | POST   | DONE     | Yes        | Create a tech                                    |
| 4   | `/api/tech/:id`             | PATCH  | DONE     | Yes        | Update tech details                              |
| 5   | `/api/tech/status/:id`      | PATCH  | DONE     | Yes        | Update tech status                               |
| 6   | `/api/tech/:id`             | DELETE | DONE     | Yes        | Delete a tech                                    |


### Ticket API Resources

All the user API router follows `/api/ticket/`

| #   | Routers                     | HTTP   | Progress    | Is Private | Description                                      |
| --- | --------------------------- | ------ | ----------- | ---------- | ------------------------------------------------ |
| 1   | `/api/ticket`               | GET    | WORKING     | Yes        | Get all ticket Info                              |
| 2   | `/api/ticket/:id`           | GET    | WORKING     | Yes        | Get a ticket details                             |
| 3   | `/api/ticket`               | POST   | WORKING     | Yes        | Create a ticket                                  |
| 4   | `/api/ticket/:id`           | PATCH  | WORKING     | Yes        | Update ticket details                            |
| 5   | `/api/ticket/:id`           | DELETE | WORKING     | Yes        | Delete a ticket                                  |


### Tokens API Resources

All the user API router follows `/api/tokens`

| #   | Routers      | HTTP | Progress | Is Private | Description            |
| --- | ------------ | ----- | -------- | ---------- | ---------------------- |
| 1   | `/api/tokens` | GET   | Not started     | No         | Get a fresh access JWT |
