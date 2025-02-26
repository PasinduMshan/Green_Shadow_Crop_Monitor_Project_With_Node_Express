import {PrismaClient} from "@prisma/client";
import Vehicle from "../model/Vehicle";

const prisma = new PrismaClient();

export async function addVehicle(v : Vehicle) {
    try {
        const newVehicle = await prisma.vehicle.create({
            data: {
                vehicleCode: v.vehicleCode,
                licensePlateNumber : v.licensePlateNumber,
                vehicleCategory : v.vehicleCategory,
                fuelType : v.fuelType,
                status : v.status,
                vehicleRemarks: v.vehicleRemarks,
                staffId : v.staffId
            }
        })
        console.log("Vehicle added ",newVehicle)
        return newVehicle;
    } catch (error) {
        console.log("error adding vehicle", error)
    }
}

export async function deleteVehicle(vehicleCode : string) {
    try {
        const deletedVehicle = await prisma.vehicle.delete({
            where: {vehicleCode: vehicleCode},
        })
        console.log("Vehicle deleted : ",deletedVehicle)
        return deletedVehicle;
    } catch (error) {
        console.log("error deleting vehicle", error)
    }
}

export async function getAllVehicles() {
    try {
        return await prisma.vehicle.findMany();
    } catch (error) {
        console.log("error getting all vehicles", error)
    }
}

export async function updateVehicle(vehicleCode : string, v: Vehicle) {
    try {
        const updatedVehicle = await prisma.vehicle.update({
            where:{ vehicleCode : v.vehicleCode},
            data: {
                vehicleCode: v.vehicleCode,
                licensePlateNumber : v.licensePlateNumber,
                vehicleCategory : v.vehicleCategory,
                fuelType : v.fuelType,
                status : v.status,
                vehicleRemarks: v.vehicleRemarks,
                staffId : v.staffId,
            }
        })
        console.log("Vehicle updated", updatedVehicle)
        return updatedVehicle;
    } catch (error) {
        console.log("error updating vehicle", error)
    }
}