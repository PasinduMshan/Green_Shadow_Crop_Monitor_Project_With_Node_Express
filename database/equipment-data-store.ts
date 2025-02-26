import {PrismaClient} from "@prisma/client";
import Equipment from "../model/Equipment";

const prisma = new PrismaClient();

export async function addEquipment(e : Equipment) {
    try {
        const newEquipment = await prisma.equipment.create({
            data: {
                equipmentId: e.equipmentId,
                equipmentName: e.equipmentName,
                equipmentType: e.equipmentType,
                status: e.status,
                staffId: e.staffId,
                fieldCode: e.fieldCode
            }
        })
        console.log("Equipment added :",newEquipment)
        return newEquipment;
    } catch (error) {
        console.log("error adding addEquipment", error)
    }
}

export async function deleteEquipment(equipmentId : string) {
    try {
        const deletedEquip = await prisma.equipment.delete({
            where: {equipmentId : equipmentId}
        })
        console.log("Equipment deleted", deletedEquip)
        return deletedEquip;
    } catch (error) {
        console.log("error deleting equipment", error)
    }
}

export async function getAllEquipments() {
    try {
        return await prisma.equipment.findMany();
    } catch (error) {
        console.log("error getting all equipment", error)
    }
}

export async function updateEquipment(equipmentId : string, e : Equipment) {
    try {
        const updatedEquip = await prisma.equipment.update({
            where: {equipmentId: equipmentId},
            data: {
                equipmentId: e.equipmentId,
                equipmentName: e.equipmentName,
                equipmentType: e.equipmentType,
                status: e.status,
                staffId: e.staffId,
                fieldCode: e.fieldCode
            }
        })
        console.log("Equipment updated", updatedEquip)
        return updatedEquip;
    } catch (error) {
        console.log("error updating equipment", error)
    }
}