const express = require("express");
const cors = require("cors");
const HomeRoute = require('./Routes/HomeRoute');
const mongoose = require("mongoose")



const server = express();
const PORT = 5000;
server.use(cors()); 
server.use(express.json()); 



server.use('/',HomeRoute);




mongoUrl = 'mongodb://localhost:27017/uploads';

mongoose.connect(mongoUrl).then(() => { console.log('connected to database') })




server.listen(PORT,()=>{
    console.log('server is running on ' + PORT)
})