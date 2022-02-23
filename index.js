const express = require('express');
const databaseConnection = require('./config/database');


const app = express()

require('dotenv').config();

databaseConnection()


const PORT = process.env.PORT;



app.listen(PORT, () => {console.log(`Server stated on port ${PORT}`)})  

