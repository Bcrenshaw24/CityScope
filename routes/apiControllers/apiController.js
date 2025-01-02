
const weather = async (req, res) => {   
    const weatherAPI = process.env.weatherAPI 
    const city = req.query.city
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherAPI}`) 
        const data = await response.json()
        res.send(data)
    
} 

const air = (req, res) => { 
    res.json({message: 'Air Quality'})
} 

const water = (req, res) => { 
    res.json({message: 'Water Quality'})
}

const crime = (req, res) => { 
    res.json({message: 'Crime Stats'})
}






module.exports = {weather, air, water, crime}