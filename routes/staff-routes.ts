import express from "express";
import Staff from "../model/Staff";
import {addStaff, deleteStaff, getAllStaffs, updateStaff} from "../database/staff-data-store";


const router = express.Router();

router.post("/addStaff", async (req, res) => {
    console.log(req.body);
    const staff:Staff = req.body;
    try {
        const addedStaff = await addStaff(staff);
        res.json(addedStaff);
    } catch (error) {
        console.log("error adding staff", error);
        res.status(400).send("error adding staff");
    }
})

router.delete("/deleteStaff/:staffId", async (req, res) => {
    const staffId:string = req.params.staffId;
    try {
        const deletedStaff = await deleteStaff(staffId);
        res.json(deletedStaff);
    } catch (error) {
        console.log("error deleting staff", error);
    }
})

router.put("/updateStaff/:staffId", async (req, res) => {
    const staffId:string = req.params.staffId;
    const staff:Staff = req.body;
    try {
        const updatedStaff = await updateStaff(staffId, staff);
        res.json(updatedStaff);
    } catch (error) {
        console.log("error updating staff", error);
    }
})

router.get("/getAllStaff", async (req, res) => {
    try {
        const staffs = await getAllStaffs();
        res.json(staffs);
    } catch (error) {
        console.log("error getting all staffs", error);
    }
})

export default router;