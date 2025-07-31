
const mongoose = require("mongoose")

const connectDB = async () => {
    mongoose.connect("mongodb+srv://09alfaashu:HzcmEyhgNJzWQR5m@namastenode.lpduw26.mongodb.net/devTinder")
}

module.exports = connectDB
