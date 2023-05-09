const express=require("express")
const  connection  = require("./Config/db")
const router = require("./Routes/employee.routes")
const app=express()
const route=require("./Routes/user.routes")


app.use(express.json())
app.use(route)
app.use(router)

app.listen(7780,()=>{
    connection()
    console.log("Server Running")
})

module.exports=app

