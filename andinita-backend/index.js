//SERVER
require('./app');

//MONGOOSE
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Andinita',{ useNewUrlParser: true },(err,res)=>{
    if(err){
        throw err
    }else{
        console.log('connect mongodb...')
    }
});

//RUTAS
require('./routes/Productos')
