import express from "express";
import {
  getCategory,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controller/categoryController.js";
const router = express.Router();

router.get("/", getCategory);
router.get("/:_id", getCategoryById);
router.post("/", createCategory);
router.put("/:_id", updateCategory);
router.delete("/:_id", deleteCategory);

export default router;
