import express from "express";
import MonitoringLog from "../model/MonitoringLog";
import {
    addMonitoringLog,
    deleteMonitoringLog,
    getAllMonitoringLogs,
    updateMonitoringLog
} from "../database/monitoringlog-data-store";

const router = express.Router();

router.post("addMonitoringLog", async (req, res) => {
    console.log(req.body);
    const monitoringLog: MonitoringLog = req.body;
    try {
        const addedMonitoringLog = await addMonitoringLog(monitoringLog);
        res.json(addedMonitoringLog);
    } catch (error) {
        console.log("error adding monitoringLog", error);
    }
})

router.delete("/deleteMonitoringLog/:logCode", async (req, res) => {
    const logCode: string = req.params.logCode;
    try {
        const deletedMonitoringLog = await deleteMonitoringLog(logCode);
        res.json(deletedMonitoringLog);
    } catch (error) {
        console.log("error deleting monitoringLog", error);
    }
})

router.put("/updateMonitoringLog/:logCode", async (req, res) => {
    const logCode:string = req.params.logCode;
    const monitoringLog: MonitoringLog = req.body;
    try {
        const updatedMonitoringLog = await updateMonitoringLog(logCode, monitoringLog);
        res.json(updatedMonitoringLog);
    } catch (error) {
        console.log("error updating monitoringLog", error);
    }
})

router.get("/getAllMonitoringLog", async (req, res) => {
    try {
        const monitoringLog = await getAllMonitoringLogs();
        res.json(monitoringLog);
    } catch (error) {
        console.log("error getting all monitoringLog", error);
    }
})

export default router;