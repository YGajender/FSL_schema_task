import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import router from './routes/route.js'; //Extension is mandatory
 
const app = express();
const PORT = 9090;

mongoose.connect(process.env.MONGODB).then(()=>console.log("connection Successfull"));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/", router);

app.listen(PORT, ()=> console.log("Server started at port"+PORT))