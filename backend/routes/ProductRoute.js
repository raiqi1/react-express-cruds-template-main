import express from "express";
import {
  addProduct,
  deleteProduct,
  getProduct,
  getProductById,
  updateProduct,
} from "../controllers/ProductController.js";

const router = express.Router();

router.get("/product", getProduct);
router.post("/product", addProduct);
router.get("/product/:id", getProductById);
router.patch("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

export default router;
