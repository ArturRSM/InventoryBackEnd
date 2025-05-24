const ProductoService = require('../services/producto.service');

module.exports = (io, socket) => {
    socket.on('get_productos', async () => {
        try {
            const productos = await ProductoService.getAllProductos();
            socket.emit('productos', productos);
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });

    socket.on('get_producto', async (data) => {
        try {
            const producto = await ProductoService.getProductoById(data.id);
            if (!producto) return socket.emit('error', { message: "ID de Producto no existente" });
            socket.emit('producto', producto);
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });

    socket.on('create_producto', async (data) => {
        try {
            const newProducto = await ProductoService.createProducto(data);
            io.emit('new_producto', newProducto);
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });

    socket.on('update_producto', async (data) => {
        try {
            const updatedProducto = await ProductoService.updateProducto(data.id, data);
            io.emit('updated_producto', updatedProducto);
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });

    socket.on('delete_producto', async (data) => {
        try {
            await ProductoService.deleteProducto(data.id);
            io.emit('deleted_producto', { id: data.id });
        } catch (error) {
            socket.emit('error', { message: error.message });
        }
    });
};
