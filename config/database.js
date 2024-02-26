const mongoose= require("mongoose");
require("dotenv").config();// all data that is defined in the .env file is now present in the  databse file and then you can use it easily.

 const dbconnect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlparser:true,
        useUnifiedtopology:true,
    })
    .then(() => console.log("db ka connection suceesfully"))
    .catch((error) =>{
        console.log("issuse in db connection");
        console.error(error.message); 
         
     // iska matlab kya h
        process.exit(1); // it is used to terminate the node.js process and the meaning of the 1 means process exite with errors 
        // and the meaning of the 0 is process terminate without the error.
    });
 }

 module.exports= dbconnect;