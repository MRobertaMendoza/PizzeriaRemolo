const express = require("express");
const router = express.Router();
const categoriaSchema = require("../models/Categoria"); //llamo model schema

//create Categoria
router.post("/categorias", (req, res) => {
    const categoria = categoriaSchema(req.body);
    categoria
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//get all Categorias
router.get("/categorias", (req, res) => {    
    categoriaSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//get a Categoria
router.get("/categorias/:id", (req, res) => { 
    const {id} = req.params;   
    categoriaSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//update a Categoria
router.put("/categorias/:id", (req, res) => { 
    const {id} = req.params;  
    const {nombre, img} = req.body;
    categoriaSchema
        .updateOne({ _id: id}, {$set: {nombre, img} })
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//delete a categoria
router.delete("/categorias/:id", (req, res) => { 
    const {id} = req.params;  
    categoriaSchema
        .deleteOne({ _id: id}) //se cambia el .remove por Node Warning
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

module.exports = router;