const { Schema, model } = require('mongoose');

const categoriaSchema = new Schema ({
  nombre: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  }  
});

module.exports = model('Categoria', categoriaSchema);

/*
const mongoose = require("mongoose");

const categoriaSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Categoria', categoriaSchema);
*/