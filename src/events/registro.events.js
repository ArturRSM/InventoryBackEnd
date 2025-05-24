const RegistroService = require('../services/registro.service');

module.exports = (io, socket) => {
    socket.on('get_registros', async () => {
        try {
            const registros = await RegistroService.getAllRegistros();
            socket.emit('registros', registros);
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });

    socket.on('get_registro', async (data) => {
        try {
            const registro = await RegistroService.getRegistroById(data.id);
            if (!registro) return socket.emit('error', { message: "ID de Registro no existente" });
            socket.emit('registro', registro);
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });

    socket.on('create_registro', async (data) => {
        try {
            const newRegistro = await RegistroService.createRegistro(data);
            io.emit('new_registro', newRegistro);
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });

    socket.on('update_registro', async (data) => {
        try {
            const updatedRegistro = await RegistroService.updateRegistro(data.id, data);
            io.emit('updated_registro', updatedRegistro);
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });

    socket.on('delete_registro', async (data) => {
        try {
            await RegistroService.deleteRegistro(data.id);
            io.emit('deleted_registro', { id: data.id });
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });
};
