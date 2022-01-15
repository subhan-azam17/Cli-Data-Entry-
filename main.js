const express = require('express')
// const bodyparser = require('body-parser')
const port = 1917;
const app = express();
const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.DATABASEURL,{ useNewUrlParser:true })
const db = mongoose.connection
db.on("error  ",(err)=>{console.log(err);})
db.once('open',()=>{console.log("Database is connected");})
app.use(express.json())

const routes = require('./routes')

app.use('/database',routes)


app.listen(port,()=>{
    console.log(`Your Port is Running At ${port}`);
})


