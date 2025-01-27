const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { setToken } = require("../service")

async function registerUser(req, res) {
    const { username, password, email, first_name } = req.body;
    try {
        // Check if the user already exists by email (or username if needed)
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists with this email" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = { username, password: hashedPassword, email, first_name };
        await User.create(newUser);
        return res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
}

async function Login(req, res) {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ message: "Invalid username or password" });

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid username or password' });
    }

    const token = setToken(req.body);
    res.status(200).json({ message: "Login successfully", token: token })
}

module.exports = { registerUser, Login };
