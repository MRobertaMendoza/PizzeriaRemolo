const categoriaController = {};

const categoriaSchema = require('../models/categoria'); //llamo al modelo de datos de Categoria

// leer todas las categorias
categoriaController.getCategorias = (req, res) => {    
    categoriaSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
};

// leer una categoria
categoriaController.getCategoria = (req, res) => { 
    const {id} = req.params;   
    categoriaSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
};

// crear una categoria
categoriaController.createCategorias = (req, res) => {
    /*
    const categoria = categoriaSchema(req.body);
    categoria
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));*/
};

// actualizar una categoria
categoriaController.updateCategorias = (req, res) => { 
    const {id} = req.params;  
    const {nombre, img} = req.body;
    categoriaSchema
        .updateOne({_id: id}, {$set: {nombre, img} })
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
};

// borrar una categoria
categoriaController.deleteCategorias = (req, res) => { 
    const {id} = req.params;  
    categoriaSchema
        .remove({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
};

module.exports = categoriaController;