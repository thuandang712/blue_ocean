// bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;


const hashPassword = plainTextPassword => {
    return bcrypt.hash(plainTextPassword, saltRounds)
}

const comparePassword = (plainTextPassword, dbPassword) => {
    return bcrypt.compare(plainTextPassword, dbPassword)
}


module.exports = {
    hashPassword,
    comparePassword
}