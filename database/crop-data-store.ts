import {PrismaClient} from "@prisma/client";
import Crop from "../model/Crop";

const prisma = new PrismaClient();

export async function addCrop(c: Crop) {
    try {
        const newCrop = await prisma.crop.create({
            data: {
                cropCode: c.cropCode,
                cropCommonName: c.cropCommonName,
                cropScientificName: c.cropScientificName,
                cropImage01: c.cropImage01,
                cropCategory: c.cropCategory,
                cropSeason: c.cropSeason,
                fieldCode: c.fieldCode,
            }
        })
        console.log("Crop saved ",newCrop)
        return newCrop;
    } catch (error) {
        console.log("error adding crop", error)
    }
}

export async function deleteCrop(cropCode: string) {
    try {
        const deletedCrop = await prisma.crop.delete({
            where: {cropCode: cropCode}
        });
        console.log("Crop deleted", cropCode)
        return deletedCrop;
    } catch (error) {
        console.log("error deleting crop", error)
    }
}

export async function getAllCrops() {
    try {
        return await prisma.crop.findMany();
    } catch (error) {
        console.log("error getting allCrops from prisma data", error)
    }
}

export async function updateCrops(cropCode: string, c: Crop) {
    try {
        const updatedCrops = await prisma.crop.update({
            where: { cropCode: c.cropCode},
            data: {
                cropCode: c.cropCode,
                cropCommonName: c.cropCommonName,
                cropScientificName: c.cropScientificName,
                cropImage01: c.cropImage01,
                cropCategory: c.cropCategory,
                cropSeason: c.cropSeason,
                fieldCode: c.fieldCode,
            }
        })
        console.log("Crops updated :", updateCrops);
        return updateCrops;
    } catch(error) {
        console.log("error updating crops", error)
    }
}