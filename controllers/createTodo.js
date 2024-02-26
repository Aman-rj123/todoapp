// import the module
const todo = require("../models/todo");

// define route  handler

exports.createTodo= async(req,res) => {
    try{
        //extract title and description  from request body
        const {title,description}= req.body;
        // create the new todo obj and insert in the database.
         const  response= await todo.create({title,description});
         // send the json response  with a succes flahg
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

