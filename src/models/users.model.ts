import * as mongoose from "mongoose";
import { User } from "../interfaces/users.interface";

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  leagues: { type: [String], required: false },
});

const userModel = mongoose.model<User & mongoose.Document>("User", userSchema);

export default userModel;
