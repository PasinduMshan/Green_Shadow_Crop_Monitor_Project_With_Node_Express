import {PrismaClient} from "@prisma/client";
import Field from "../model/Field";
import Staff from "../model/Staff";

const prisma = new PrismaClient();

// =========== Field Crud ===========

export async function addField(f: Field) {
    try {
        const newField = await prisma.field.create({
            data:{
                fieldCode: f.fieldCode,
                fieldName: f.fieldName,
                fieldLocation: f.fieldLocation,
                fieldSize: f.fieldSize,
                fieldImage01: f.fieldImage01,
                fieldImage02: f.fieldImage02,
            }
        })
        console.log('Field added', newField)
        return newField;
    } catch (error) {
        console.log("error adding customer", error)
    }
}

export async function deleteField(fieldCode: string) {
    try {
        const  deletedField = await prisma.field.delete({
            where: {fieldCode: fieldCode}
        });
        console.log("Field deleted", fieldCode)
        return deletedField;
    } catch (error) {
        console.log("error deleting field", error)
    }
}

export async function getAllFields() {
    try{
        return await prisma.field.findMany();
    } catch (error) {
        console.log("error getting fields from prisma data", error)
    }
}

export async function updateField(fieldCode: string, f: Field) {
    try {
        const updatedField = await prisma.field.update({
            where: {fieldCode: fieldCode},
            data: {
                fieldName: f.fieldName,
                fieldLocation: f.fieldLocation,
                fieldSize: f.fieldSize,
                fieldImage01: f.fieldImage01,
                fieldImage02: f.fieldImage02,
            }
        })
        console.log('Field updated :', updatedField);
        return updatedField;
    } catch (error) {
        console.log("error updating field", error)
    }
}


// =========== Staff Crud ===========

export async function addStaff(s: Staff) {
    try {
        const newStaff = await prisma.staff.create({
            data:{
                staffId: s.staffId,
                firstName: s.firstName,
                lastName: s.lastName,
                designation: s.designation,
                gender: s.gender,
                joinDate: new Date(s.joinDate + "T00:00:00.000Z"),
                dateOfBirth: new Date(s.dateOfBirth + "T00:00:00.000Z"),
                address01: s.address01,
                address02: s.address02,
                address03: s.address03,
                address04: s.address04,
                address05: s.address05,
                contactNo: s.contactNo,
                email: s.email,
                role: s.role
            }
        })
        console.log('Staff added', newStaff);
        return newStaff;
    } catch (error) {
        console.log("error adding staff", error)
    }
}

export async function deleteStaff(staffId:string) {
    try {
        const deletedField = await prisma.staff.delete({
            where: {staffId: staffId}
        });
        console.log("Staff deleted", deletedField);
        return deletedField;
    } catch (error) {
        console.log("error deleting staff", error)
    }
}

export async function getAllStaffs() {
    try {
        const staffList =  await prisma.staff.findMany();
        return staffList.map(staff => ({
            ...staff,
            joinDate: staff.joinDate.toISOString().split('T')[0], // Extract only YYYY-MM-DD
            dateOfBirth: staff.dateOfBirth.toISOString().split('T')[0]
        }));
    } catch (error) {
        console.log("error getting all staffs", error)
    }
}

export async function updateStaff(staffId: string, s: Staff) {
    try {
        const updatedStaff = await prisma.staff.update({
            where: {staffId: staffId},
            data: {
                staffId: s.staffId,
                firstName: s.firstName,
                lastName: s.lastName,
                designation: s.designation,
                gender: s.gender,
                joinDate: new Date(s.joinDate + "T00:00:00.000Z"),
                dateOfBirth: new Date(s.dateOfBirth + "T00:00:00.000Z"),
                address01: s.address01,
                address02: s.address02,
                address03: s.address03,
                address04: s.address04,
                address05: s.address05,
                contactNo: s.contactNo,
                email: s.email,
                role: s.role
            }
        })
        console.log("Staff updated", updatedStaff);
        return updatedStaff;
    } catch (error) {
        console.log("error updating staff", error)
    }
}

