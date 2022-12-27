const express = require('express');
require('./models')
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

app.use(bodyParser.json());

app.get('/',(req, res)=>{
    res.send('hello from sequelize');
})

app.listen(port,()=>{
    console.log(`listening to the port ${4000}...`);
})