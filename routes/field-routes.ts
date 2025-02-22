import express from "express";
import Field from "../model/Field";
import {addField, deleteField, getAllFields, updateField} from "../database/field-data-store";

const router = express.Router();

router.post("/addField", async (req, res) => {
    console.log(req.body);
    const field: Field = req.body;
    try {
        const addedField = await addField(field);
        res.json(addedField);
    } catch (error) {
        console.log("error adding field", error);
        res.status(400).send("Error adding field");
    }
})

router.delete("/deleteField/:fieldCode", async (req, res) => {
    const fieldCode: string = req.params.fieldCode;
    try {
        const deletedField = await deleteField(fieldCode);
        res.json(deletedField);
    } catch (error) {
        console.log("error deleting field", error);
    }
})

router.put("/updateField/:fieldCode", async (req, res) => {
    const fieldCode = req.params.fieldCode;
    const field : Field = req.body;

    try {
        const updatedField = await updateField(fieldCode, field);
        res.json(updatedField);
    } catch (error) {
        console.log("error updating field", error);
    }
})

router.get("/getAllField", async (req, res) => {
    try {
        const fields = await getAllFields();
        res.json(fields);
    } catch (error) {
        console.log("error getting all fields", error);
    }
})

export default router;