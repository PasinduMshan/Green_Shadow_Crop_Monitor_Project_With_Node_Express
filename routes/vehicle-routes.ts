import express from "express";
import Vehicle from "../model/Vehicle";
import {addVehicle, deleteVehicle, getAllVehicles, updateVehicle} from "../database/vehicle-data-store";

const router = express.Router();

router.post("/addVehicle", async (req, res) => {
    console.log(req.body);
    const vehicle: Vehicle = req.body;
    try {
        const addedVehicle = await addVehicle(vehicle);
        res.json(addedVehicle);
    } catch (error) {
        console.log("error adding vehicle", error);
        res.status(400).send("Error adding vehicle data");
    }
})

router.delete("/deleteVehicle/:vehicleCode", async (req, res) => {
    const vehicleCode: string = req.params.vehicleCode;
    try {
        const deletedVehicle = await deleteVehicle(vehicleCode);
        res.json(deletedVehicle);
    } catch (error) {
        console.log("error deleting vehicle", error);
    }
})

router.put("/updateVehicle/:vehicleCode", async (req, res) => {
    const vehicleCode: string = req.params.vehicleCode;
    const vehicle : Vehicle = req.body;
    try {
        const updatedVehicle = await updateVehicle(vehicleCode, vehicle);
        res.json(updatedVehicle);
    } catch (error) {
        console.log("error updating vehicle", error);
    }
})

router.get("getAllVehicle", async (req,res)=> {
    try {
        const vehicles = await getAllVehicles();
        res.json(vehicles)
    } catch (error) {
        console.log("error getting all vehicles", error);
    }
})

export default router;