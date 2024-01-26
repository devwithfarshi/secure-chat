import User from "../models/userModel.js";
import bcrypt, { hash } from "bcrypt";
export const registerController = async (req, res) => {
  const { name, email, username, password } = req.body;
  try {
    if (!name || !email || !username || !password) {
      res.status(406).send({
        message: "All the fields are required",
        success: false,
      });
      return;
    }
    //pre-extisting user
    const extist = await User.findOne({ email });
    if (extist) {
      res.status(400).send({
        message: "User all ready extist",
        success: false,
      });
      return;
    }
    //check username exist or not
    const extistUsername = await User.findOne({ username });
    if (extistUsername) {
      res.status(400).send({
        message: `${username} is not avilable for your username.`,
        success: false,
      });
      return;
    }

    //hass password
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, (err, hashPassword) => {
      if (err) {
        console.log(`Password hash error -> ${err}`);
        return;
      }

      //save user in database
      const user = new User({
        name,
        email,
        username,
        password: hashPassword,
      });
      user
        .save()
        .then((user) => {
          res.status(200).send({ user });
        })
        .catch((err) => console.log({ err }));
    });
  } catch (error) {
    console.log(`Register error -> ${error}`);
  }
};
export const loginController = async (req, res) => {};
