const { response } = require('express')
const express = require('express')
const app = express()
app.get('/', (req,res)=>{
    res.send("home page")
})
app.listen(5000, ()=>{
    console.log("Welcome to Javascript of app5 , Server is running on port 5000");
})
