const express = require('express');
const databaseConnection = require('./config/database');
const { productModule } = require('./src/component');



const app = express()

require('dotenv').config();

databaseConnection()

app.use(express.json());

app.use('/api/product', productModule.route)


const PORT = process.env.PORT;



app.listen(PORT, () => {console.log(`Server stated on port ${PORT}`)})  

