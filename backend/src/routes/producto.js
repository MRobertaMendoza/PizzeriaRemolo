const express = require("express");
//const productos = require("../models/producto");
const router = express.Router();//creo un enrutador
// const categoriaSchema = require("../models/Categoria");
const prodSchema = require("../models/Producto"); //llamo model schema
// const Categoria = mongoose.model("Categoria");


//create products
router.post("/productos", (req, res) => {
    const producto = prodSchema(req.body);
    producto
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
        //res.send("bienvenidosss a productos");
});

//get all products
router.get("/productos", (req, res) => {    
    prodSchema
        // .find({},(err,productos)=>{categoriaSchema.populate(productos, {path: "categoria"})})
        .find().populate('categoria')
        // .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
         
});

//get a products
router.get("/productos/:id", (req, res) => { 
    const {id} = req.params;   
    prodSchema
        .findById(id).populate('categoria')
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
        
});

//update a product
router.put("/productos/:id", (req, res) => { 
    const {id} = req.params;  
    const {nombre, precio, img, descripcion, medida, idCategoria} = req.body;
    prodSchema
        .updateOne({_id: id}, {$set: {nombre, precio, img, descripcion, medida, idCategoria} })
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
        
});

//delete a product
router.delete("/productos/:id", (req, res) => { 
    const {id} = req.params;  
    prodSchema
        .deleteOne({ _id: id}) //se cambia el .remove por Node Warning
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
        
});

module.exports = router;
