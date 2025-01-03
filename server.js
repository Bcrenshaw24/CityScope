const express = require('express') 
require('dotenv').config(); 

const app = express()  

const port = process.env.PORT; 

app.use('/api/data', require('./routes/routes'))
app.listen(port, () => { 
    console.log("Server is running")
})

