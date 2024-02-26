const todo= require("../models/todo");
const { param } = require("../routes/todo");

exports.findbyid= async(req, res)=>{
    try{
        const id= req.body.id;
        console.log(id);
        const  response= await todo.findById(id);
        console.log(response);
        res.status(200).json(
            {
                succes:true,
                data:response,
                message:"entry creatred succesfully"
                
            }
         );

    }catch(err){
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