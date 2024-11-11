import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import fileUpload from "express-fileupload"; //the middelware
import router from './routes/route.js'; //Extension is mandatory
import cors from "cors"
 
const app = express();
const PORT = 9090;

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(fileUpload())

mongoose.connect(process.env.MONGODB).then(()=>console.log("connection Successfull"));


app.use("/", router);

app.listen(PORT, ()=> console.log("Server started at port"+PORT))