import User from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function getUsers(req, res) {
  try {
    let data = await User.find();
    res.status(200).send({ data });
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
}

async function getUserById(req, res) {
  try {
    let _id = req.params._id;
    let data = await User.findById({ _id });
    res.status(200).send({ data });
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
}

async function createUser(req, res) {
  try {
    let data = req.body;
    let check = await User.findOne({ email: data.email });
    if (!check) {
      let password = await bcrypt.hash(data.password, 10);
      data.password = password;

      let users = await User.create(data);
      res.status(200).send({
        data: users,
      });
    } else {
      throw new Error("email already exists");
    }
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
}
async function updateUser(req, res) {
  try {
    let { _id } = req.params;
    let data = await User.findByIdAndUpdate(_id, req.body);
    res.send(data);
  } catch (error) {
    res.send({ error: error.message });
  }
}

async function deleteUser(req, res) {
  try {
    let { _id } = req.params;
    let data = await User.findByIdAndRemove(_id, req.body);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
}

//simple login with toke by email password
async function loginUser(req, res) {
  let { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      let check = await bcrypt.compare(password, user.password); //it retrun or false
      if (check) {
        //login ka token alag hoga or auth(for create update) ka alag dia--single data send kya user ka sirf id
        let token = jwt.sign(
          { id: user._id, isAdmin: user.isAdmin },
          process.env.JWT_SECRET
        );
        const options = {
          expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
          ),
          httpOnly: true,
        };

        res.status(200).cookie("token", token, options).json({
          success: true,
          user,
          token,
        });
        res.status(200).send(token);
      } else {
        throw Error("Passord is invalid");
      }
    } else throw Error("Email is invalid");
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
}

async function logoutUser(req, res, next) {
  await res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
}
export {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
  logoutUser,
};
