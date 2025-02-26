import express from "express";
import {Equipment} from "@prisma/client";
import {addEquipment, deleteEquipment, getAllEquipments, updateEquipment} from "../database/equipment-data-store";


const router = express.Router();

router.post("/addEquipment", async (req, res) => {
    console.log(req.body);
    const equipment: Equipment = req.body;
    try {
        const addedEquipment = await addEquipment(equipment);
        res.json(addedEquipment);
    } catch (error) {
        console.log("error adding equipment", error);
    }
})

router.delete("/deleteEquipment/:equipmentId", async (req, res) => {
    const equipmentId: string = req.params.equipmentId;
    try {
        const deletedEquipment = await deleteEquipment(equipmentId);
        res.json(deletedEquipment);
    } catch (error) {
        console.log("error deleteEquipment", error);
    }
})

router.put("/updateEquipment/:equipmentId", async (req, res) => {
    const equipmentId: string = req.params.equipmentId;
    const equipment: Equipment = req.body;
    try {
        const updatedEquipment = await updateEquipment(equipmentId, equipment);
        res.json(updatedEquipment);
    } catch (error) {
        console.log("error updating updateEquipment", error);
    }
})

router.get("/getAllEquipment", async (req, res) => {
    try {
        const equipments = await getAllEquipments();
        res.json(equipments);
    } catch (error) {
        console.log("error getting all Equipment", error);
    }
})

export default router;