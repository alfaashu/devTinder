const express = require("express")

const app = express()

const {adminAuth, userAuth} = require("./middlewares/auth")

app.get("/getUserData", (req, res, next) => {

    throw new Error("fjhasdljfhasd")
    res.send("User data is sent")
})

app.use("/", (err, req, res, next) => {
    if(err){
        res.status(500).send("Something went wrong")
    }
})

app.listen(3000, () => {
    console.log("Server is successfully listening on port 3000");
})