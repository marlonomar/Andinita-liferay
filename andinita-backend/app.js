//SERVER

const express = require('express');
const app = express();

//BODY PARSER
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//ROUTES
let producto =require('./routes/Productos');

//RUTAS
app.use('/productos',producto)
app.listen(3000,()=>{
    console.log('server http://localhost:3000');
})

module.exports = {app};