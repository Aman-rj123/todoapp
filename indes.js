const express= require("express");
const app= express();

// load config from env file

require("dotenv").config();
const PORT= process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

// import routes for todo api

 const todoRoutes= require("./routes/todo");
 // mount thr todo api routes
 app.use("/api/v1",todoRoutes);


 // start server
 app.listen(PORT,()=>{
    console.log(`server started successces at ${PORT}`);
 })

 // connect to the database

 const dbconnect= require("./config/database");
 dbconnect();

 // default route
 app.get("/" ,(req,res)=>{
    res.send("<h1>this is a home page</h1>");
 })

 