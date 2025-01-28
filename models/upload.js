const mongoose = require("mongoose");


const uploadSchema = mongoose.Schema({
    filename: String,
    path: String,
    size: Number,
    mimetype: String,
},{timestamps:true});

const Upload = mongoose.model("uploads",uploadSchema);

module.exports=Upload;