//Here we are making the model of user which will handle query of users in DataBase

const User= require('./user');

const getAllUsers=()=>{
    return User.find({}).exec();
}

const getUserById=(id)=>{
    return User.findById(id).exec();
}

const updateUserByID=(id,params)=>{
    return User.findByIdAndUpdate(id, params,{new:true}).exec();
}

module.exports={getAllUsers, getUserById, updateUserByID};