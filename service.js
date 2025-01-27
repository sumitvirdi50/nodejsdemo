const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;

const setToken = (user) => {
    return jwt.sign(user, secret);
}

module.exports = { setToken }