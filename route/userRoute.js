import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
  logoutUser,
} from "../controller/userController.js";

const router = express.Router();

router.get("/logout", logoutUser); //hmesha getbyid to uper dena
router.get("/", getUsers);
router.get("/:_id", getUserById);
router.post("/register", createUser);
router.put("/:_id", updateUser);
router.delete("/:_id", deleteUser);
router.post("/login", loginUser);

export default router;
