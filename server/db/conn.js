
const mongoose = require('mongoose');

const db = process.env.DATABASE;

mongoose.connect(db).then(()=> {
    console.log("connected");
}).catch((err)=> console.log("not connected"));
