import express from "express";
// import Product from '../models/product.model.js';
// import mongoose from 'mongoose';
import { createProduct, deleteProduct, getProducts, updateProduct } from "../backend/controller/products.controller.js";
const router = express.Router();

router.get("/", getProducts);
router.post("",createProduct);
router.put("/:id", updateProduct);
  //async part is called a controller function 
router.delete("/:id", deleteProduct);
export default router;