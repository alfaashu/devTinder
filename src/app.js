const express = require("express")
const connectDB = require("./config/database")
const app = express()
const User = require("./models/user")

app.use(express.json())


// Signup 
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
        const users = await User.find({emailId: userEmail})
        if(users.length === 0) {
            res.status(404).send("User not found")
        } else {
            res.send(users)
        }
    } catch (err) {
        res.status(400).send("Something went wrong")
    }
})

// Feed API - GET /feed - get all the users form the database
app.get("/feed", async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
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

