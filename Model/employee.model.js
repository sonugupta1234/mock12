const mongoose=require("mongoose")

const employeeSchema=mongoose.Schema({
   FirstName: String,
   LastName: String,
   Email: String,
   Department: String,
   Salary: Number
})

const employeeModel=mongoose.model("employee",employeeSchema)

module.exports=employeeModel