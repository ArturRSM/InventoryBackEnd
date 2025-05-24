const EntradaService = require('../services/entrada.service');

module.exports = (io, socket) => {
    socket.on('get_entradas', async () => {
        try {
            const entradas = await EntradaService.getAllEntradas();
            socket.emit('entradas', entradas);
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });

    socket.on('get_entrada', async (data) => {
        try {
            const entrada = await EntradaService.getEntradaById(data.id);
            if (!entrada) return socket.emit('error', { message: "ID de Entrada no existente" });
            socket.emit('entrada', entrada);
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });

    socket.on('create_entrada', async (data) => {
        try {
            const newEntrada = await EntradaService.createEntrada(data);
            io.emit('new_entrada', newEntrada);
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });

    socket.on('update_entrada', async (data) => {
        try {
            const updatedEntrada = await EntradaService.updateEntrada(data.id, data);
            io.emit('updated_entrada', updatedEntrada);
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });

    socket.on('delete_entrada', async (data) => {
        try {
            await EntradaService.deleteEntrada(data.id);
            io.emit('deleted_entrada', { id: data.id });
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });
};
