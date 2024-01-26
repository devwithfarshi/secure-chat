import express from "express";
import {
  getAllUsers,
  loginController,
  registerController,
} from "../controllers/user.js";
const route = express.Router();

route.post("/login", loginController);
route.post("/register", registerController);
route.get("/allusers", getAllUsers);

export default route;
