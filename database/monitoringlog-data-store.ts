import {PrismaClient} from "@prisma/client";
import MonitoringLog from "../model/MonitoringLog";


const prisma = new PrismaClient()

export async function addMonitoringLog(m: MonitoringLog) {
    try {
        const newMonitongLog = await prisma.monitoringLog.create({
            data: {
                logCode: m.logCode,
                logDate: new Date(m.logDate + "T00:00:00.000Z"),
                logDetails: m.logDetails,
                observedImage: m.observedImage,
                staffId: m.staffId,
                fieldCode: m.fieldCode,
                cropCode: m.cropCode
            }
        })
        console.log("MonitoringLog added ", newMonitongLog);
        return newMonitongLog;
    } catch (error) {
        console.log("error adding monitoringLog", error)
    }
}

export async function deleteMonitoringLog(logCode: string) {
    try {
        const deletedMonitoringLog = await prisma.monitoringLog.delete({
            where: {logCode: logCode}
        })
        console.log("MonitoringLog deleted ", deletedMonitoringLog);
        return deletedMonitoringLog;
    } catch (error) {
        console.log("error deleting monitoringLog", error)
    }
}

export async function getAllMonitoringLogs() {
    try {
        const logList = await prisma.monitoringLog.findMany();
        return logList.map(monitoringLog => ({
            ...monitoringLog,
            logDate: monitoringLog.logDate.toISOString().split('T')[0]
        }));
    } catch (error) {
        console.log("error getting all monitoringLogs", error)
    }
}

export async function updateMonitoringLog(logCode: string, m: MonitoringLog) {
    try {
        const updatedMonitoringLog = await prisma.monitoringLog.update({
            where:{logCode: logCode},
            data: {
                logCode: m.logCode,
                logDate: new Date(m.logDate + "T00:00:00.000Z"),
                logDetails: m.logDetails,
                observedImage: m.observedImage,
                staffId: m.staffId,
                fieldCode: m.fieldCode,
                cropCode: m.cropCode
            }
        })
        console.log("MonitoringLog updated ", updatedMonitoringLog);
        return updatedMonitoringLog;
    } catch (error) {
        console.log("error updating monitoringLog", error)
    }
}