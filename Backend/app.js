const express = require('express');
const mongoose = require('mongoose');
const app = express()
const router = require("./routes/book-routes")
const cors = require("cors");
//import admin from './model/admin';
const adminRouter =require('./routes/admin-routes');
//Middlewares
/*
app.use("/", (req,res,next)=>{
    res.send("this is our starting app");
})

*/
app.use(express.json())
app.use(cors());
app.use("/books",router);
app.use("/admin",adminRouter);

mongoose.connect(
    "mongodb+srv://admin:admin123@cluster0.i4gabwi.mongodb.net/Book-Store?retryWrites=true&w=majority"
    ).then(()=>console.log('Connected to database'))
    .then(()=>{
        app.listen(5000)
    })
    .catch((err)=>console.log(err)
    );




















//console.log('hello world!!');
