const User = require("../models/user")

async function getUserById(req, res) {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).json({ message: "user not found" })
    return res.json(user);
}

async function getAllUsers(req, res) {
    const allUsers = await User.find({});
    return res.status(200).json(allUsers);
}

async function addUser(req, res) {
    const body = req.body;
    if (!body.first_name || !body.last_name || !body.email || !body.gender || !body.ip_address) {
        return res.status(400).json({ message: "All fields are required" })
    }
    await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        ip_address: body.ip_address
    })
    return res.status(201).json({ message: "success" })
}

async function deleteUser(req, res) {
    await User.findByIdAndDelete(req.body.id)
    return res.status(200).json({ message: "deleted successfully" });
}

async function editUser(req,res) {
    console.log(req.body);
    await User.findByIdAndUpdate(req.body.id, { first_name: req.body.first_name })
    res.status(200).json({ message: "updated successfully" })
}


module.exports = {
    getUserById,
    getAllUsers,
    addUser,
    deleteUser,
    editUser
}