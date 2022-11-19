import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const DBConnection = process.env.CONNECTION_STRING;

mongoose.connect(DBConnection,()=>{
    console.log('connect to flights DB');
})


// {userNewUrlParser: true, userUnifiedTopology: true}
// .then(()=>app.listen(PORT, ()=>console.log(`Server running on port: ${PORT}`)))
// .catch((error)=>console.log(error.message));

// mongoose.set('useFindAndModify', false);

// module.exports = { 
//     connectToDB: ()=>{},
//     getDB: ()=>{}
// }