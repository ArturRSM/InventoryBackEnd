const SalidaService = require('../services/salida.service');

module.exports = (io, socket) => {
    socket.on('get_salidas', async () => {
        try {
            const salidas = await SalidaService.getAllSalidas();
            socket.emit('salidas', salidas);
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });

    socket.on('get_salida', async (data) => {
        try {
            const salida = await SalidaService.getSalidaById(data.id);
            if (!salida) return socket.emit('error', { message: "ID de Salida no existente" });
            socket.emit('salida', salida);
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });

    socket.on('create_salida', async (data) => {
        try {
            const newSalida = await SalidaService.createSalida(data);
            io.emit('new_salida', newSalida);
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });

    socket.on('update_salida', async (data) => {
        try {
            const updatedSalida = await SalidaService.updateSalida(data.id, data);
            io.emit('updated_salida', updatedSalida);
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });

    socket.on('delete_salida', async (data) => {
        try {
            await SalidaService.deleteSalida(data.id);
            io.emit('deleted_salida', { id: data.id });
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });
};
