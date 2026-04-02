const express = require("express");
const cors = require("cors");
const HomeRoute = require('./Routes/HomeRoute')


const server = express();
const PORT = 5000;
server.use(cors()); 
server.use(express.json()); 

server.use('/',HomeRoute);









server.listen(PORT,()=>{
    console.log('server is running on ' + PORT)
})