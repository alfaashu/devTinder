const express = require("express")

const app = express()

// This will only handle get call to /user
app.get("/user/:userid/:username/:password", (req,res) => {
    console.log(req.params)
    res.send({firstName: "Akshay", lastName: "Saini"})
})

app.listen(3000, () => {
    console.log("Server is successfully listening on port 300");
})