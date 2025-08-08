const express = require("express")
const connectDB = require("./config/database")
const app = express()
const User = require("./models/user")

app.use(express.json())

app.post("/signup", async (req, res) => {
    const user = new User(req.body);
    
    try {
        await user.save()
        res.send('user added successfully')
    } catch (err) {
            res.status(400).send("Error saving the user ", err.message)
        }
})


// Get user by email

app.get("/user", async (req, res) => {
    const userEmail = req.body.emailId

    try {

        const user = await User.find({emailId: userEmail})
        res.send(user)

    } catch (err) {

        res.status(400).send("Something went wrong")
    }
})

connectDB().then(() => {
    console.log("Databse connected successfully");
    app.listen(7777, () => {
    console.log("Server is successfully listening on port 3000");
})
}).catch( err => {
    console.log("Database cannection unsuccessfull");
})

