const City = require('./User') 
const mongoose = require('mongoose')

//gets database url from env file
//Usually neeeded for Mongo Atlas
const db = process.env.URL

//checks database for data
async function checkDB(cityName) {   
        const data = await City.findOne({city: cityName})  
        return data
} 
//adds to database
async function addDB(cityData) {   
    
    try { 
        await City.create(cityData) 
        console.log('City added')
    } catch (error) { 
        console.error(error)
    }
    
}  

module.exports = {addDB, checkDB}