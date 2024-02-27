// import the module
const todo = require("../models/todo");

// define route  handler

exports.createTodo= async(req,res) => {
    try{
        //extract title and description  from request body
        const {title,description,age,email}= req.body;

        // create the new todo obj and insert in the database.
         const  response= await todo.create({title,description,age,email});
         // send the json response  with a succes flahg
         if(!email) {
            res.status(400).json({
                succes:false,
                message:"email not found"
            })
         }
         console.log(response);
         res.status(200).json(
            {
                succes:true,
                data:response,
                message:"entry creatred succesfully"
                
            }
         );
    }
     catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            succes:false,
            data:"internal server error",
            message:err.message,
        })
     }
}

