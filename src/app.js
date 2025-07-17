const express = require("express")

const app = express()

app.use("/user", (req, res, next) => {
    // res.send("Route handler 1")
    console.log("Handle the route user");
    next()
    res.send("Response!") 
},
    (req, res) => {
        console.log("Handle the route user 2");
        res.send("Response 2!")  
    }
)

app.listen(3000, () => {
    console.log("Server is successfully listening on port 3000");
})