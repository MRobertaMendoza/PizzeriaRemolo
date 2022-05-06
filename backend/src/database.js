const mongoose = require ('mongoose');

mongoose
.connect(process.env.MONGODB_REMOLO) //uso los datos del .env para conectar
.then(() => console.log('Conectado a la BD!!'))
.catch((error) => console.error(error));