const express = require("express")

const app = express()

const {adminAuth, userAuth} = require("./middlewares/auth")

app.use("/admin", adminAuth)

app.get("/user/login", (req, res, next) => {
    res.send("User logged in successfully")
})

app.get("/user/data", userAuth, (req, res, next) => {
    res.send("User data is sent")
})

app.get("/admin/getAllData", (req, res, next) => {
    res.send("All data sent")
})

app.get("/admin/deleteUser", (req, res, next) => {
    res.send("Deleted the user")
})

app.listen(3000, () => {
    console.log("Server is successfully listening on port 3000");
})