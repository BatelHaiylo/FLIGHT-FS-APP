import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
  street: {
    type: String,
  },
  city: {
    type: String,
  },
});

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 1,
    max: 100,
    validate: {
      validator: (v) => v % 2 === 0,
      message: (props) => `${props.value} is not an even number`,
    },
  },
  email: {
    type: String,
    minLength: 10,
    require: true,
    lowercase: true,
  },
  createAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updateAt: {
    type: Date,
    default: () => Date.now(),
  },
  bestFriend: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  hobbies: {
    type: [String],
  },
  address: AddressSchema,
});

//this is nice to do all the validation in the model itself
//the issue is that build in || custom  is only gonna run
// when were use the create()|| save()
//there is a bunch of methods build into mongoose that we can use to update things in the db
// but does don't go through validation cus they work directly on the mongo db db
//methods like: findByIdAndRemove()... -- its recommended to not use them
// instead use the query methods

//__________________________________________________________________
///advance things in schema///
//we cant use an arrow function in mongoose

//add a method into every single instance of our user
UserSchema.methods.sayHi = function () {
  console.log(`Hi. My name is ${this.name}`);
};

//where works like find. where is chainable and doesn't have a  return find just return 
UserSchema.statics.ByName = function (name) {
  return this.where({ name: new RegExp(name, "i") });
};

UserSchema.virtual('nameEmail').get(function(){
    return `${this.name} <${this.email}>`
})

export const UserModal = mongoose.model("User", UserSchema);