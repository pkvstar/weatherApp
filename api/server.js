const express = require('express');
const weatherRoute = require('./routes/weather');
const app = express();
const cors = require('cors')
app.use(cors());
require('dotenv').config();
app.use('/weather',weatherRoute);
app.get('/',(req,res)=>{
    res.send("hello world");
})
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`server is running on ${port} PORT`);
})