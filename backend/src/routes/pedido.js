const express = require("express");
const router = express.Router();
const pedidoSchema = require("../models/Pedido");//traigo el modelo Pedido

//create pedido
router.post("/pedidos", (req, res) => {
    const pedido = pedidoSchema(req.body);
    pedido
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//get all pedidos - CORREGIR!! trae null los id del producto y sus datos
router.get("/pedidos", (req, res) => {    
    pedidoSchema
        .find().populate('detalle.producto')
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//get pedido
router.get("/pedidos/:id", (req, res) => { 
    const {id} = req.params;   
    pedidoSchema
        .findById(id)
        .populate('detalle.producto')
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
        
});

//update pedido
router.put("/pedidos/:id", (req, res) => { 
    const {id} = req.params;  
    const {detalle, nombre, direccion, telefono, nota} = req.body;
    pedidoSchema
        .updateOne({ _id: id}, {$set: {detalle, nombre, direccion, telefono, nota} })
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
        
});

//delete pedido
router.delete("/pedidos/:id", (req, res) => { 
    const {id} = req.params;  
    pedidoSchema
        .deleteOne({_id: id}) //se cambia el .remove por Node Warning
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
        
});

module.exports = router;
