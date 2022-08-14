const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config({
    path : './config.env'
});
const app = express();
const PORT = process.env.PORT || 3000

//middlewares 
app.use(express.urlencoded({extended : true}))
app.use(express.static("public"))
app.set('view engine' , 'ejs')

//routes 
app.use(require('./routes/web'))
app.use(require('./routes/route'))

//Connect To Database
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DATABASE);
        console.log('MongoDB connected')
        const Port = process.env.PORT || 8000;
        const sever=app.listen(Port,() => {
            console.log(`Server Lishen on port ${Port}....`)
        })    
    }catch(error){
        console.log(error)
    }
    }
    try{
        connectDB();
    }catch(error){
        console.log('Failed to connect to mongo DB')
    }

