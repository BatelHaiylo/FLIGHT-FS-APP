import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
    street:{
        type:String
    },
    city:{
        type:String
    },
});

const UserSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
        required: true,
      },
      email: {
        type: String,
      },
      createAt: {
        type: Date,
      },
      updateAt: {
        type: Date,
      },
      bestFriend: {
        type: mongoose.SchemaTypes.ObjectId
      },
      hobbies:{
        type: [String]
      },
      address:AddressSchema,
      
  }
  );
  
  export const UserModal = mongoose.model("User", UserSchema);