import express from "express";
import { getFsls,getOneIdFsls,createFsl,deleteFsl} from "../controllers/fsl.js";

const router = express.Router();

//ROUTES
router.post("/createFsl",createFsl);//add a Fsl
router.get("/getFsls",getFsls);//fetch all Fsls  
router.get("/getOneIdFsls/:id",getOneIdFsls) //getByIdFsls
router.delete("/deleteFsl/:id", deleteFsl); //delete a Fsl

export default router;