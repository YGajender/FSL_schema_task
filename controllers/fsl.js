import express from "express";
import FslModel from "../models/fsl.js";


export async function createFsl(req, res) {
   try {
      console.log(req.body)
      const createnewFsl = new FslModel(req.body);
      await createnewFsl.save();
      res.status(201).json(createnewFsl)
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to Add Fsl' })
   }
}

export async function getFsls(req, res) {
   try {
      const Fsls = await FslModel.find();
      res.status(200).json(Fsls);
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to Add Fsl' })
   }
}

export async function getOneIdFsls(req, res) {
      const Fsls = await FslModel.findById(req.params.id)
      console.log(Fsls)
      res.status(200).json(Fsls);
}

export async function putOneFsls(req, res) {
   try {
      const updateOneFsls = await BorrowerModel.findByIdAndUpdate(
         req.params.id,
         req.body,
         { new: true } 
      );
      if (!updateOneFsls)
         return res.status(404).json({ error: 'Borrower not found' });
         res.status(200).json(updateOneFsls);
   } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to update single data', details: err.message });
   }
}

export async function deleteFsl(req, res) {
   const deleteFsl = await FslModel.findByIdAndDelete(req.params.id);
   console.log(deleteFsl);
   if (deleteFsl) {
      res.status(200).json({ message: 'Fsl deleted successfully' });
   } else {
      res.status(404).json({ message: 'Fsl not found' });
   }
}
