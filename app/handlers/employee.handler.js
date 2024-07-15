const Employee = require('../models/Employee');

// crear una funcion para llamado a select del modelo
// envia parametros req y res
// req significa request = peticion
// res significa response = respuesta
const listEmployee = async (req, res) => {
    try {
        // llamado a funcion de select
        const employee = await Employee.getEmployees();
        res.json(employee); // parsea a json y retorna la respuesta
    } catch (error) {
        res.status(500).json( { error: error.message } );
    }
}

const insertEmployee = async(req, res) => {
    try {
        // llamado a funcion de insert
        const employee = await Employee.insert(req.body);
        // 201 para crear
        res.status(201).json(employee);
    } catch (error) {
        res.status(500).json( { error: error.message } );
    }
}

const updateEmployee = async(req, res) => {
    try {
        // llamado a funcion de insert
        const employee = await Employee.update(req.body, req.params.id);
        // 200 por default
        res.json(employee) 
    } catch (error) {
        res.status(500).json( { error: error.message } );
    }
}

const deleteEmployee = async(req, res) => {
    try {
        // llamado a funcion de insert
        const employee = await Employee.delete(req.params.id);
        res.json(employee) 
    } catch (error) {
        res.status(500).json( { error: error.message } );
    }
}

module.exports = {
    listEmployee,
    insertEmployee,
    updateEmployee,
    deleteEmployee,
}