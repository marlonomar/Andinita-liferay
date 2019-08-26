const connectMultipart = require('connect-multiparty');
let Producto = require('../models/Productos');

function error (res,err){
    res.status(500).send({mensaje: 'error en la peticion' , error : err});
}

function getProductos(req,res){
    
    Producto.find({ availability : true })
          .exec((err,producto)=>{
              if(err){
                error (res,err)
              }

              return res.send({
                  success: true,
                  producto
              })
          })
}

function createProducto (req,res){
    let body = req.body;

    let producto = new Producto({
        title : body.title,
        description : body.description,
        price : body.price,
        typeProduct : body.typeProduct
    });

    producto.save((err,producto)=>{

        if(err) return error (res,err);

        return res.status(200).send({
            success : true,
            producto :producto
        });
    })
}

function uploadPhotoProducto(req,res){

}

function updateProducto(req,res){
    let id = req.params.id;
    let body = req.body;

    Producto.findByIdAndUpdate(id,body,{new:true},(err,producto)=>{

        if(err) return error (res,err);

        return res.status(200).send({
            success: true,
            producto : producto
        });

    });
}

function unavailableProducto(req,res){
    let id = req.params.id;
    let availability = {
        availability : false
    }

    Producto.findByIdAndUpdate(id,availability,{new:true},(err,producto)=>{

        if(err) return error (res,err);

        return res.status(200).send({
            success: true,
            producto : producto
        });

    });
}

function availableProducto(req,res){
    let id = req.params.id;
    let availability = {
        availability : true
    }

    Producto.findByIdAndUpdate(id,availability,{new:true},(err,producto)=>{

        if(err) return error (res,err);

        return res.status(200).send({
            success: true,
            producto : producto
        });

    });
}

module.exports ={
    getProductos,
    createProducto,
    updateProducto,
    unavailableProducto,
    availableProducto
}
