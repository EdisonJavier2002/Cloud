const Category = require('../models/Category');

// crear una funcion para llamado a select del modelo
// envia parametros req y res
// req significa request = peticion
// res significa response = respuesta
const listCategory = async (req, res) => {
    try {
        // llamado a funcion de select
        const category = await Category.getCategorys();
        res.json(category); // parsea a json y retorna la respuesta
    } catch (error) {
        res.status(500).json( { error: error.message } );
    }
}

const insertCategory = async(req, res) => {
    try {
        // llamado a funcion de insert
        const category = await Category.insert(req.body);
        // 201 para crear
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json( { error: error.message } );
    }
}

const updateCategory = async(req, res) => {
    try {
        // llamado a funcion de insert
        const category = await Category.update(req.body, req.params.id);
        // 200 por default
        res.json(category) 
    } catch (error) {
        res.status(500).json( { error: error.message } );
    }
}

const deleteCategory = async(req, res) => {
    try {
        // llamado a funcion de insert
        const category = await Category.delete(req.params.id);
        res.json(category) 
    } catch (error) {
        res.status(500).json( { error: error.message } );
    }
}

module.exports = {
    listCategory,
    insertCategory,
    updateCategory,
    deleteCategory,
}