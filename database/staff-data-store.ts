import {PrismaClient} from "@prisma/client";
import Staff from "../model/Staff";

const prisma = new PrismaClient();


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

