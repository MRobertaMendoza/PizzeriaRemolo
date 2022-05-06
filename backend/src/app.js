require('dotenv').config();// llama a las variables de entorno
const express = require('express');
const cors = require("cors");

const app = express();

/*Importo las rutas*/
const productosRoutes = require("./routes/producto");
const pedidosRoutes = require("./routes/pedido");
const categoriasRoutes = require("./routes/categoria");

// config
app.set('port', process.env.PORT || 3000)

// middlewares
app.use(express.urlencoded({extended: false})); //???
app.use(cors());
app.use(express.json()); //indico q use el format JSON de express
app.use("/api", [productosRoutes, pedidosRoutes, categoriasRoutes]); //Agrego el prefijo "/api" a las rutas indicadas

//routes
app.get("/", (req,res) => {
    res.send("WELCOME TO MY API");
  });

module.exports = app;