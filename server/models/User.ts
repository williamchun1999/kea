//makes the userSchema

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
  password: String,
  friends: {
    type: Array 
  },
});


module.exports = mongoose.model("User", UserSchema);

//password hash middleware