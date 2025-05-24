const express = require('express');
const cors = require('cors');


const ProductoRoutes = require('./routes/producto.routes.js');
const BodegaRoutes = require('./routes/bodega.routes.js');
const RegistroRoutes = require('./routes/registro.routes.js');
const DocumentoRoutes = require('./routes/documento.routes.js');
const EntradaRoutes = require('./routes/entrada.routes.js');
const SalidaRoutes = require('./routes/salida.routes.js');
const MermaRoutes = require('./routes/merma.routes.js');
const ResponsableRoutes = require('./routes/responsable.routes.js');
const InventarioRoutes = require('./routes/inventario.routes.js');
const ProductoInventarioRoutes = require('./routes/producto_inventario.routes.js');

const bodyParser = require('body-parser');

const app = express();

// Configurar body-parser para analizar solicitudes JSON
app.use(bodyParser.json());


app.use(cors({
    origin: '*', // Permitir solicitudes desde cualquier origen
    methods: ['GET', 'POST', 'DELETE', 'PUT'], // Permitir métodos HTTP especificados
    allowedHeaders: ['Content-Type', 'Authorization'], // Permitir encabezados específicos
    optionsSuccessStatus: 200, // Configurar el código de estado de éxito para OPTIONS
    credentials: true // Permitir credenciales de origen cruzado
}));

// USER
app.use(ResponsableRoutes);

// PRODUCTO / BODEGA / REGISTRO
app.use(ProductoRoutes);
app.use(BodegaRoutes);
app.use(RegistroRoutes);


// ENTRADA / SALIDA / MERMA
app.use(DocumentoRoutes);
app.use(EntradaRoutes);
app.use(SalidaRoutes);
app.use(MermaRoutes);

// INVENTARIO
app.use(InventarioRoutes);
app.use(ProductoInventarioRoutes);



module.exports = app;
