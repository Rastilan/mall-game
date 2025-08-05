import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  username: string;
  email: string;
  passwordHash: string;
  unlockedItems: string[];  // example field for unlocked stuff
}

const userSchema = new mongoose.Schema<IUser>({
  username: { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  unlockedItems: { type: [String], default: [] },
});

const User = mongoose.model<IUser>("User", userSchema);
export default User;
