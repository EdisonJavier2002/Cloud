const Order = require('../models/Order');

// Función para listar productos
const listOrder = async (req, res) => {
    try {
        const orders = await Order.getOrders();
        res.json(orders); // Parsear a JSON y retornar la respuesta
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Función para insertar una orden
const insertOrder = async (req, res) => {
    try {
        const order = await Order.insert(req.body);
        res.status(201).json(order); // 201 para creación exitosa
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Función para actualizar una orden
const updateOrder = async (req, res) => {
    try {
        const order = await Order.update(req.body, req.params.id);
        res.json(order); // 200 por defecto
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Función para eliminar una orden
const deleteOrder = async (req, res) => {
    try {
        const order = await Order.delete(req.params.id);
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    listOrder,
    insertOrder,
    updateOrder,
    deleteOrder,
}
