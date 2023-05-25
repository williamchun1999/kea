//makes the userSchema
import mongoose from "mongoose"


const UserSchema = new mongoose.Schema({
  fName: {
    type: String,  
  },
  lName: {
    type: String, 
  },
  userName: {
    type: String, 
    unique: true 
  },
  email: {
    type: String,
    unique: true 
  },
  password: {
    type: String,
  },
  friends: {
    type: [String],
    default: [],
  },
});


module.exports = mongoose.model("User", UserSchema);

//password hash middleware