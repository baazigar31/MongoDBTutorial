var Mongoose=require('mongoose');

const connect=()=>{
    return Mongoose.connect('mongodb://localhost:27017/MongoDemo');
}
connect()
.then(connection=>{
    console.log('Mongo DB connection Setup Done!!');
})
.catch(err=>{console.error(err)});