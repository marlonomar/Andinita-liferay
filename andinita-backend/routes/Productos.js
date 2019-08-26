const express = require('express');
const api = express.Router();
const PastelesControllers = require('../controllers/Productos');

api.get('/producto',PastelesControllers.getProductos);
api.post('/new-producto',PastelesControllers.createProducto);
api.put('/edit-producto/:id',PastelesControllers.updateProducto);
api.put('/available-producto/:id',PastelesControllers.availableProducto);
api.delete('/unavailable-producto/:id',PastelesControllers.unavailableProducto);


module.exports = api;