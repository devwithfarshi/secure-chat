import { model, Schema } from "mongoose";

const userModel = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYR7VNJ4ARokmkEctaTBDpA5jdDbmzp91TOn0vxwmf0PVj32DY0zvKyN7QXzeb0PvX9hK7cfaExtawz5pQEuBPJcd2pwUQ=w1920-h929",
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userModel);
export default User;
