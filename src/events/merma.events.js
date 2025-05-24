const MermaService = require('../services/merma.service');

module.exports = (io, socket) => {
    socket.on('get_mermas', async () => {
        try {
            const mermas = await MermaService.getAllMermas();
            socket.emit('mermas', mermas);
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });

    socket.on('get_merma', async (data) => {
        try {
            const merma = await MermaService.getMermaById(data.id);
            if (!merma) return socket.emit('error', { message: "ID de Merma no existente" });
            socket.emit('merma', merma);
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });

    socket.on('create_merma', async (data) => {
        try {
            const newMerma = await MermaService.createMerma(data);
            io.emit('new_merma', newMerma);
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });

    socket.on('update_merma', async (data) => {
        try {
            const updatedMerma = await MermaService.updateMerma(data.id, data);
            io.emit('updated_merma', updatedMerma);
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });

    socket.on('delete_merma', async (data) => {
        try {
            await MermaService.deleteMerma(data.id);
            io.emit('deleted_merma', { id: data.id });
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });
};
