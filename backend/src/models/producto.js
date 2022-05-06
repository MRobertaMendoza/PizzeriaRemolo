const { Schema, model } = require("mongoose");
// const Categoria = mongoose.model("Categoria");

const prodSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  medida: {
    type: String,
    required:true
  },
  categoria: { type : Schema.ObjectId, ref : "Categoria" }  
});

module.exports = model('Producto', prodSchema);

/*
require('./Categoria');
const mongoose = require("mongoose");
const Categoria = mongoose.model('Categoria'); //cargo el modelo categoria para relacionarlo

const prodSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  // relaciono el producto con la categoria
  categoria: { 
    type : Schema.ObjectId, ref : "Categoria",
    required: true
  }
  /*
  "Categoria" : {
    "id": objectId,
    required: true
  }
  
});

module.exports = mongoose.model('Producto', prodSchema);
*/