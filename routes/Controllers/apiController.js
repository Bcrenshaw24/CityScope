const mongoose = require('mongoose') 
const {checkDB, addDB} = require('./database') 
const City = require('./User')
const db = process.env.URL 

//gets weather data from city
async function fetchWeather(req) {   
    const cityName = req  
    const weatherAPI = process.env.weatherAPI  
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weatherAPI}`) 
    const data = await response.json() 
    parsed = data.weather[0].main
    return parsed
    
} 
// gets air quality data from city
async function fetchAir(req) {  
    const cityName = req
    const airAPI = process.env.airAPI 
    const response = await fetch(`https://api.waqi.info/feed/${cityName}/?token=${airAPI}`)  

    const data = await response.json() 
    aqi = data.data.aqi
    return aqi
} 
//Had trouble finding a good api 
/*const population = (req, res) => { 
    res.json({message: 'Crime Stats'}) 
//} */

//syncs api calls with database
//assuming valid user input for now
const all = async (req, res) => {  
    const cityName = req.query.city  
    try {  
        await mongoose.connect(db)
        const data = await checkDB(cityName)  

        if(data) { 
            res.json(data)
        } else {
            const weatherData = await fetchWeather(cityName) 
            const aqiData = await fetchAir(cityName) 
            console.log("retrieved data")
            res.json({city: cityName, weather: weatherData, air: aqiData}) 
            console.log('converted data')
            addDB({city: cityName, weather: weatherData, air: aqiData})   

        }  

    } catch (error) { 
        console.error(error)

} 
}






module.exports = { all }