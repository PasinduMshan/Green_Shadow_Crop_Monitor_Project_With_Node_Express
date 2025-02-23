import express from "express";
import Crop from "../model/Crop";
import {addCrop, deleteCrop, getAllCrops, updateCrops} from "../database/crop-data-store";


const router = express.Router();

router.post("/addCrop", async (req, res) => {
    console.log(req.body);
    const crop: Crop = req.body;
    try {
        const addedCrop = await addCrop(crop);
        res.json(addedCrop);
    } catch (error) {
        console.log("error adding crop", error);
        res.status(400).send("error adding crop");
    }
})

router.delete("/deleteCrop/:cropCode", async (req, res) => {
    const cropCode: string = req.params.cropCode;
    try {
        const deletedCrop = await deleteCrop(cropCode);
        res.json(deletedCrop);
    } catch (error) {
        console.log("error deleting deleteCrop", error);
    }
})

router.put("/updateCrop/:cropCode", async (req, res) => {
    const cropCode: string = req.params.cropCode;
    const crop: Crop = req.body;
    try {
        const updatedCrop = await updateCrops(cropCode, crop);
        res.json(updatedCrop);
    } catch (error) {
        console.log("error updating crop", error);
    }
})

router.get("/getAllCrop", async (req, res) => {
    try {
        const crops = await getAllCrops();
        res.json(crops);
    } catch (error) {
        console.log("error getting all crop", error);
    }
})

export default router;