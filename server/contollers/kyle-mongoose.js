import mongoose from "mongoose";
//import user moodel to have access to the user
import { UserModal } from "../model/kyle-moongose.js";

//1
//easiest way to create a new user
const User = new UserModal({ name: "Kyle", age: 26 });
// this is just a local copy inside of  js. program - not in the db

//to save it in the db we need to use this func=>
User.save().then(() => console.log("user saved"));

//1.2
// better way to right the above code :
async function run() {
  const User = new UserModal({ name: "Kyle", age: 26 });
  await User.save();
  console.log(User);
}
// run();

//2
// another way to create user is to use the create func & to pass her the User param
//make sure we await that
//the create method does the same as creating a User instance and using the save methode just shorter
async function secondRun() {
  await UserModal.create({ name: "Kyle", age: 26 });
  console.log(User);
}
// secondRun();

// updating a user name =>
async function updateRun() {
  const user = await UserModal.create({ name: "Kyle", age: 26 });
  //change locally
  user.name = "Sally";
  // in order to save the change in the db =>
  await user.save();
  console.log(user);
}
// updateRun();


//add to our user 
async function addToUser(){
    const user = await UserModal.create(
        {
        name:"Batel",
        age:25,
        hobbies:["swimming", "reading"],
        address:{
            street: "San Francisco",
        }
    })
    console.log(user);
}
// addToUser()

//error management
async function cleanAddToUser(){
    try{
        const user = await UserModal.create(
            {
            name:"Batel",
            age:25,
            hobbies:["swimming", "reading"],
            address:{
                street: "San Francisco",
            }
        })
        console.log(user);
    }catch(e){console.log(e.message)};
}
cleanAddToUser()

