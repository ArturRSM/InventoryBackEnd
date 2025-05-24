const BodegaService = require('../services/bodega.service');

module.exports = (io, socket) => {
    socket.on('get_bodegas', async () => {
        try {
            const bodegas = await BodegaService.getAllBodegas();
            socket.emit('bodegas', bodegas);
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });

    socket.on('get_bodega', async (data) => {
        try {
            const bodega = await BodegaService.getBodegaById(data.id);
            if (!bodega) return socket.emit('error', { message: "ID de Bodega no existente" });
            socket.emit('bodega', bodega);
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });

    socket.on('create_bodega', async (data) => {
        try {
            const newBodega = await BodegaService.createBodega(data);
            io.emit('new_bodega', newBodega);
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });

    socket.on('update_bodega', async (data) => {
        try {
            const updatedBodega = await BodegaService.updateBodega(data.id, data);
            io.emit('updated_bodega', updatedBodega);
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });

    socket.on('delete_bodega', async (data) => {
        try {
            await BodegaService.deleteBodega(data.id);
            io.emit('deleted_bodega', { id: data.id });
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });
};
