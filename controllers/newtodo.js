const newtodo= require("../models/newtodo")


exports.newtodo= async(req,res)=>{
  
    try{
        const {firstname,lastname,email}=req.body;

        const response= await newtodo.create({firstname,lastname,email});
        console.log(response);
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


