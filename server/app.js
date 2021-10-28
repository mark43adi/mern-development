
const bodyParser = require('body-Parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});

require('./db/conn');

app.use(require('./router/auth'));

app.use(bodyParser.json());


// app.get('/',(req,res) =>{
//     res.send("hello!!");
// });
// mongoose.connect('mongodb://localhost/mernstack').then(()=>{
//     console.log("connected");
// })
app.listen(3000,() =>{
    console.log("running");
});
console.log('asdi');