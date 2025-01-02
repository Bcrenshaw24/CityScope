const express = require('express') 
require('dotenv').config();

const app = express()  
const port = process.env.PORT; 

app.use('/api', require('./routes/routes'))
app.listen(port)