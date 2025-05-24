
const ProductoEvents = require('../events/producto.events');
const BodegaEvent = require('../events/bodega.events');
const RegistroEvents = require('../events/registro.events');
const DocumentoEvents = require('../events/documento.events');

const EntradaEvents = require('../events/entrada.events');
const SalidaEvents = require('../events/salida.events');
const MermaEvents = require('../events/merma.events');



const configureWebSocket = (server, io) => {
  io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado:', socket.id);

    socket.on('error', (err) => {
      console.error('Error en el socket:', err);
    });

    socket.on('connect_error', (err) => {
      console.error('Error de conexión:', err.message);
    });

    ProductoEvents(io, socket);
    BodegaEvent(io, socket);

    RegistroEvents(io, socket);

    DocumentoEvents(io, socket);

    EntradaEvents(io, socket);
    SalidaEvents(io, socket);
    MermaEvents(io, socket);

    socket.on('disconnect', (reason) => {
      console.log('Cliente desconectado:', reason);
    });
  });
};

module.exports = configureWebSocket;
