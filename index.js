const express = require("express");
const {connectMongoDb} = require("./connection")
const {logRes} = require("./middlewares")
const userRouter = require("./routes/user")
const app = express();

app.use(express.urlencoded({ extended: false }))

app.use(logRes("log.txt"))

connectMongoDb("mongodb://127.0.0.1:27017/demoProject")
app.use("/users", userRouter)


app.listen("8080", () => console.log("port started"))