const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;

async function authenticateToken(req, res, next) {
    const token = req.headers["authorization"];    
    if (!token) return res.status(403).json({ message: "Access token required" });    
    jwt.verify(token, secret, (err,user) => {
        if (err) {
            return res.status(403).json({ message: "invalid access token" })
        }
        req.user = user
        next();

    })
}

module.exports = authenticateToken