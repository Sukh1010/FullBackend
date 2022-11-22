import express from "express";
import {
  createproduct,
  deleteproduct,
  getproductById,
  getproducts,
  updateproduct,
} from "../controller/productController.js";
const router = express.Router();

router.get("/", getproducts);
router.get("/:_id", getproductById);
router.post("/", createproduct);
router.put("/:_id", updateproduct);
router.delete("/:_id", deleteproduct);

export default router;
