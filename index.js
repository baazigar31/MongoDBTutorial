const Mongoose=require('mongoose');
const User=require('./user');
const UserQuery=require('./userModelImpl');  // UserModel where all functions related to query of user in database is written


const connect=()=>{
    return Mongoose.connect('mongodb://localhost:27017/MongoDemo');
}
connect()
.then( async connection=>{
    console.log('Mongo DB connection Setup Done!!');

    //Just for demo
    await User.deleteMany({});

    //Creating a user entry in the database
     const user= await User.create({
         firstName: 'Shubham',
         lastName: 'Anand',
         email:'sa@gmail.com'
     });
    //  console.log('Hello i am continuing');
    console.log(user);
    // console.log(typeof user instanceof Promise); // will give false 

    //Way to create multiple user
    await User.create([
        {
            firstName:'Shahrukh',
            lastName:'Khan',
            email:'srk@gmail.com'

        },
        {
            firstName:'Madhuri',
            email:'madhuri@gmail.com',
            underAge:true
        }
    ]);
    console.log('**************');
    //user queries 

    const u1= await UserQuery.getAllUsers();//.then(v=>{
    const u2=await UserQuery.getUserById(user.id);
    const u3 = await UserQuery.updateUserByID(user.id, {underAge: true});

    //     console.log(v)
    // });
      // Making use of usermodel to interact with database
    console.log(u1);
    console.log(u2);
    console.log(u3);
    // console.log(typeof u1);
    // console.log(u1 instanceof Mongoose.Query); if we dont write await and then compare we get true.








})
.catch(err=>{console.error(err)});