const express = require('express');
const User = require('./models/user')
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

app.use(bodyParser.json());

app.get('/',(req, res)=>{
    res.send('hello from sequelize');
})

// User.sync({alter:true})
User.sync();

app.listen(port,()=>{
    console.log(`listening to the port ${4000}...`);
})