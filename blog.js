const Mongoose=require('mongoose');

const blogSchema=new Mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
        minlength:10 // this is a validation
    },
    author:{
        required:true
    }
})