const mongoose = require('mongoose') 

const citySchema = new mongoose.Schema({ 
    city: String, 
    air: Number,  
    weather: String
}) 

module.exports = mongoose.model("cities", citySchema) 
