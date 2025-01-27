const express = require("express");
const router = express.Router();
const { getAllUsers, getUserById, addUser, deleteUser, editUser } = require("../controllers/users");


// get request for html format
router.get("/:id", getUserById)

// common route
router.route("/").get(getAllUsers).post(addUser).delete(deleteUser).patch(editUser)

module.exports = router
