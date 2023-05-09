const express=require("express")

const router=express.Router()
const employeeModel=require("../Model/employee.model")


router.post("/employee",async(req,res)=>{

    const {FirstName,LastName,Email,Department,Salary}=req.body

    try {
        const employee=await employeeModel({FirstName,LastName,Email,Department,Salary})
        await employee.save()
        res.status(200).send("employee added Sucessfully")
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports=router