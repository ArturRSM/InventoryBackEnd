const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const app = require('./src/app.js');
const { sequelize } = require('./src/database/database.js');
const configureWebSocket = require('./src/services/socket.service');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const WS_PATH = process.env.WS_PATH || '/ws';
const API_PATH = process.env.API_PATH || '/api'; 
const CORS_ORIGIN = process.env.CORS_ORIGIN || "*"; 


// Crear servidor HTTP
const expressApp = express();

// Montar la API en la ruta personalizada
expressApp.use(API_PATH, app);

// Crear servidor HTTP a partir de expressApp
const server = http.createServer(expressApp);

// Configurar WebSocket en una ruta específica

const io = socketIO(server, {
     cors: {
    origin: CORS_ORIGIN,
    methods: ["GET", "POST"],
    
  },
    path: WS_PATH,
    //tryAllTransports: true,
    transports: ['websocket', 'polling'],
    allowEIO3: true
});


// Escuchar conexiones de clientes

configureWebSocket(server,io)



async function main() {
    try {
        await sequelize.sync({ force: false });
        console.log("Base de datos sincronizada!");

        // Configurar WebSocket
        //configureWebSocket(server, io);

        server.listen(PORT, () => {
            console.log(`Servidor API escuchando en http://gamar:${PORT}${API_PATH}`);
            console.log(`WebSocket escuchando en http://gamar:${PORT}${WS_PATH}`);
        });
    } catch (error) {
        console.error("No se pudo conectar a la base de datos", error);
    }
}

main();






