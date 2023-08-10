var express = require('express')
var cors = require("cors")
var app = express()
const sql = require("mysql2")

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
}).promise()


app.use(cors())


app.get('/test',(req,res)=>{
    res.json({message:"Hello world"})
})

app.get("/attraction",async(req,res)=>{
    try{
        const [rows,fields] = await pool.query("SELECT * FROM attractions ")
        res.json(rows)


    }catch(err){
        console.log(err)
    }

})

app.listen(6000,()=>{
    console.log("SERVER START")
})