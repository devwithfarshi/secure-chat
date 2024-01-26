import { generateToken } from "../config/token.js";
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
          res.status(201).send({
            message: "Account create successfully",
            success: true,
            user: {
              _id: user._id,
              name: user.name,
              email: user.email,
              username: user.username,
            },
          });
        })
        .catch((err) => console.log({ err }));
    });
  } catch (error) {
    console.log(`Register error -> ${error}`);
  }
};

//login handler
export const loginController = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(406).send({
      message: "All the fields are required",
      success: false,
    });
    return;
  }
  try {
    //Find the user
    const user = await User.findOne({
      $or: [{ email: username }, { username }],
    });
    if (!user) {
      res.status(401).send({
        message: "Invalid email or password",
        success: false,
      });
      return;
    }
    //password check match or not!
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      res.status(401).send({
        message: "Invalid email or password",
        success: false,
      });
      return;
    }

    res.status(201).send({
      message: "Login successfully",
      success: true,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        username: user.username,
      },

      token: generateToken(user._id),
    });
  } catch (error) {
    console.log(`login error --> ${error}`);
  }
};

// get all users
export const getAllUsers = async (req, res) => {
  User.find().then((users) => {
    res.status(200).send(users);
  });
};
