
const mongoose= require("mongoose");

const newtodo = new mongoose.Schema({

    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }

    
});
module.exports = mongoose.model("newtodo",newtodo);