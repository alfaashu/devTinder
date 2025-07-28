const adminAuth = (req, res, next) => {
    
    console.log("Checking authentication");
    const token = "xyz"
    const isAdminAuthorized = token === "xyz"
    if (!isAdminAuthorized){
        res.status(401).send("Unauthorized Access")
    } else {
        next()
    }
}

const userAuth = (req, res, next) => {
    
    console.log("Checking user authentication");
    const token = "xyz"
    const isAdminAuthorized = token === "xyz"
    if (!isAdminAuthorized){
        res.status(401).send("Unauthorized Access")
    } else {
        next()
    }
}

module.exports = {
    adminAuth,
    userAuth
}