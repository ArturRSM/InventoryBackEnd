const DocumentoService = require('../services/documento.service');

module.exports = (io, socket) => {
    socket.on('get_documentos', async () => {
        try {
            const documentos = await DocumentoService.getAllDocumentos();
            socket.emit('documentos', documentos);
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });

    socket.on('get_documento', async (data) => {
        try {
            const documento = await DocumentoService.getDocumentoById(data.id);
            if (!documento) return socket.emit('error', { message: "ID de Documento no existente" });
            socket.emit('documento', documento);
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });

    socket.on('create_documento', async (data) => {
        try {
            const newDocumento = await DocumentoService.createDocumento(data);
            io.emit('new_documento', newDocumento);
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });

    socket.on('update_documento', async (data) => {
        try {
            const updatedDocumento = await DocumentoService.updateDocumento(data.id, data);
            io.emit('updated_documento', updatedDocumento);
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });

    socket.on('delete_documento', async (data) => {
        try {
            await DocumentoService.deleteDocumento(data.id);
            io.emit('deleted_documento', { id: data.id });
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });
};
