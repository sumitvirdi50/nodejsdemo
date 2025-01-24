const mongoose = require("mongoose");

async function connectMongoDb(url) {
    mongoose.connect(url).then(() => console.log("database connected")).catch(() => console.log("error connecting"))
}

module.exports = { connectMongoDb }