//makes the userSchema
import mongoose, {Document} from "mongoose"
import bcrypt from "bcrypt"

//define interface that extends Document and include the method

interface IUser extends Document {
  fName: string
  lName: string
  userName: string
  email:string
  password: string
  friends: string[]

  comparePassword(candidatePassword: string): Promise<Boolean>
}


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


//password hash middleware

UserSchema.pre("save", function save(next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

// Helper method for validating user's password.

UserSchema.methods.comparePassword = function comparePassword(candidatePassword){
  return bcrypt.compare(candidatePassword, this.password)
}

export const User = mongoose.model<IUser>("User", UserSchema);
