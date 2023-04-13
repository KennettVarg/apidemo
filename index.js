const express= require("express")
const app=express()
const port=3144

app.get("/", (req,res) =>{
    console.log(req)
    res.send("viva")
})
