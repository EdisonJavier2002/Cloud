const Product = require('../models/Product');

// Función para listar productos
const listProduct = async (req, res) => {
    try {
        const products = await Product.getProducts();
        res.json(products); // Parsear a JSON y retornar la respuesta
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Función para insertar un producto
const insertProduct = async (req, res) => {
    try {
        const product = await Product.insert(req.body);
        res.status(201).json(product); // 201 para creación exitosa
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Función para actualizar un producto
const updateProduct = async (req, res) => {
    try {
        const product = await Product.update(req.body, req.params.id);
        res.json(product); // 200 por defecto
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Función para eliminar un producto
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.delete(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    listProduct,
    insertProduct,
    updateProduct,
    deleteProduct,
}
