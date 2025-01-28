const multer = require("multer");
const express = require("express");
const Upload = require("../models/upload");
const uploadRouter = express.Router();

const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,"uploads/") 
    },
    filename:(req,file,cb) => {
       cb(null,`${Date.now() + file.originalname}`)
    }
});


const upload = multer({storage});
uploadRouter.post("/",upload.single("file"),async (req,res) => {
    const { originalname, path, size, mimetype } = req.file;
    const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;

    const file = new Upload({filename:originalname, path,size, mimetype})
    await file.save()

    return res.status(201).json({message:"file uploaded", url:fileUrl})
})

module.exports = uploadRouter