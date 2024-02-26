
const todo= require("../models/todo");


exports.getalltodo= async(req,res)=>{
    try{
    //     const response = await todo.find();
    // console.log(response );
        const  response= await todo.find();
        console.log(response);
        res.status(200).json(
            {
                succes:true,
                data:response,
                message:"read data ssuccesfully"
                
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