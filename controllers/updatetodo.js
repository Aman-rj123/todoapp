 const todo= require("../models/todo");

 exports.updatetodo= async(req,res)=>{

    try{
        const {title, description}= req.body;
        const id = req.body.id;
        const response= await todo.findByIdAndUpdate(id,{title,description});
        console.log(response);
        res.status(200).json(
            {
                succes:true,
                data:response,
                message:"update  succesfully"
                
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