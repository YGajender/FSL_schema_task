import express from "express";
import { getFsls,getOneIdFsls,createFsl,deleteFsl, putOneFsls } from "../controllers/fsl.js";

const router = express.Router();

//ROUTES
router.post("/createFsl",createFsl);//add a Fsl
router.get("/getFsls",getFsls);//fetch all Fsls  getByIdFsls
router.get("/getOneIdFsls/:id",getOneIdFsls)
router.get("/putOneFsls/:id",putOneFsls)
router.delete("/deleteFsl/:id", deleteFsl); //delete a Fsl

export default router;