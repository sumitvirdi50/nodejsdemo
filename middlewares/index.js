const fs = require("fs");

function logRes(filename){
    return (req,res,next) => {
        fs.appendFile(filename, `${Date.now()} => ${req.method} and ${req.path}\n`, (err, data) => {
            next();
        })
    }
}

module.exports = {logRes}