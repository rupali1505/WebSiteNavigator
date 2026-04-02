const express = require("express");
const router = express.Router();
const {homeResponse} = require("../Controllers/HomeController");
const mongoose = require('mongoose')

router.use("/uploads",homeResponse);
mongoUrl = 'mongodb://localhost:27017/uploads/';

mongoose.connect(mongoUrl).then(()=>{console.log('connected to database')})

module.exports = {
    homeResponse:router
}