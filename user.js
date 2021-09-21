//Here we are making the schema for the user.
const Mongoose=require('mongoose');

const userSchema=new Mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:String,
    email:{
        required:true,
        type:String,
        unique:true // this is not a validation 
    },
    underAge:{
        type:Number,
        default:false
    }
});

//Exporting this model
module.exports=Mongoose.model('user',userSchema);
