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
        res.status(400).send(`Feed loading failed! ${err}`)
    }
})

// Delete a user
app.delete("/user", async (req, res) => {
    const userId = req.body.userId
    try {
        const user = await User.findByIdAndDelete(userId)
        res.send("User deleted successfully")
    } catch (err) {
        res.status(400).send(`User deletion failed! ${err}`)
    }
})

// Update a user
app.patch("/user/:userId", async (req, res)=> {
    const userId = req.params?.userId
    const data = req.body
    
    try {
        const ALLOWED_UPDATES = [
            "photoUrl", 
            "about", 
            "gender", 
            "age", 
            "skills"
        ]

    const isUpdateAllowed = Object.keys(data).every(k => ALLOWED_UPDATES.includes(k))
    if(!isUpdateAllowed){
        throw new Error("Update not allowed")
    }
    if(data?.skills.length > 10){
        throw new Error('Skills cannot be more than 10')
    }
        await User.findByIdAndUpdate({_id: userId}, data, {runValidators: true})
        res.send("User updated successfully")
    } catch (err) {
        res.status(400).send(`User update failed! ${err}`)
    }
})

connectDB().then(() => {
    console.log("Databse connected successfully");
    app.listen(7777, () => {
    console.log("Server is successfully listening on port 7777");
})
}).catch( err => {
    console.log("Database connection unsuccessfull");
})

