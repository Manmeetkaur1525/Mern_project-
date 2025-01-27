// const express from 'express; --old way
import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js ';
// import Product from '../models/product.model.js';
// import mongoose from 'mongoose';
import productRoutes from './routes/product.routes.js';
dotenv.config();
const app = express();

//controller function
// app.get("/" ,(req,res) =>{
//     res.send("Server is ready");
// });
// console.log(process.env.MONGO_URI);
//Product controller 
//midlleware that helps to parse the body

app.use(express.json());//allows us to accept Json data in the req.body 

app.use("/products",productRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
console.log(`Server running on httx p://localhost:${PORT}`);
  await connectDB(); // Connect to MongoDB when the server starts
});