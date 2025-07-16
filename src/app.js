const express = require("express")

const app = express()

app.use("/user", (req,res) => {
    res.send("hahahahahaha")
})

// This will only handle get call to /user
app.get("/user", (req,res) => {
    res.send({firstName: "Akshay", lastName: "Saini"})
})

app.post("/user", (req,res) => {
    res.send("Data successfully saved")
})

app.delete("/user", (req,res) => {
    res.send("Data successfully deleted")
})

app.patch("/user", (req, res) => {
    res.send("Data successfully patched")
})

// This will match all the HTTP method API calls to /test
app.use("/test", (req, res) => {
    res.send("Hello route executed");
})

app.listen(3000, () => {
    console.log("Server is successfully listening on port 300");
})