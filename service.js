const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;

const setToken = (user) => {
    return jwt.sign(user, secret, {expiresIn:"1h"});
}

module.exports = { setToken }