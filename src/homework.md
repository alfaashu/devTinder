Create a repository
Initialize the project
Difference between package.json and package-lock.json
install express
Create a server
listen to port 7777
write request handlers for /test, /hello
install nodemon 

---------------------------------------------------

> Play with routed and route extension ex. /hello, / , hello/2, /xyz
> Order of the routes matter a lot
> Install Postman app and make a workspace/collection > test API call
> Write logic to handle GET, POST, PATCH, DELETE API calls and test them on Postman
> Explore routing and use of ?, + , () , * in the routes
> Use of regex in routes /a/ , /.*fly$/
> Reading the query params in routes
> Reading the dynamic routes

> Multiple route handleers 
> next()
> next function and errors along with res.send()
> app.use("/route", rH, [rH2, rH3], rH4)
> What is middleware? Why do we need it.
> How ExpressJs basically handles requests behind the scenes
> Difference app.use and app.all
> Write a dummy auth middleware for admin
> Write a dummy auth middleware for all user routes, except /user/login
> Error handling using app.use("/", (err, req, res, next) = {})

> Create a free cluster on MongoDB official website (Mongo Atlas)
> Install mongoose library
> Connect your application to the database "Connection-url"/devTinder
> Call the connectDB function and connect to database before starting application on 7777
> Create a userSchema % user Model
> Create POST /signup API to add data to database
> Push some documents using API calls from postman
> Error handling using try, catch

