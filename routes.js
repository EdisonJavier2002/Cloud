const express = require('express'); // llamado a framework

// llamar a handlers del api
// se presiona control + clic en: './app/handlers/customer.handler' para que nos direccione
const customerHandler = require('./app/handlers/customer.handler');
const categoryHandler = require('./app/handlers/category.handler');
const employeeHandler = require('./app/handlers/employee.handler');
const productHandler = require('./app/handlers/product.handler');
const orderHandler = require('./app/handlers/order.handler');

const router = express.Router();

// registrar las rutas
// rutas de customer
router.get('/customers', customerHandler.listCustomer) // obtener cliente
router.post('/customers', customerHandler.insertCustomer) // insertar cliente
router.patch('/customers/:id', customerHandler.updateCustomer) // actualizar cliente
router.delete('/customers/:id', customerHandler.deleteCustomer) // eliminar cliente

// rutas de category
router.get('/categorys', categoryHandler.listCategory) // obtener categoria
router.post('/categorys', categoryHandler.insertCategory) // insertar categoria
router.patch('/categorys/:id', categoryHandler.updateCategory) // actualizar categoria
router.delete('/categorys/:id', categoryHandler.deleteCategory) // eliminar categoria

// rutas de employee
router.get('/employees', employeeHandler.listEmployee) // obtener empleado
router.post('/employees', employeeHandler.insertEmployee) // insertar empleado
router.patch('/employees/:id', employeeHandler.updateEmployee) // actualizar empleado
router.delete('/employees/:id', employeeHandler.deleteEmployee) // eliminar empleado

// rutas de product
router.get('/products', productHandler.listProduct) // obtener producto
router.post('/products', productHandler.insertProduct) // insertar producto
router.patch('/products/:id', productHandler.updateProduct) // actualizar producto
router.delete('/products/:id', productHandler.deleteProduct) // eliminar producto

// rutas de order
router.get('/orders', orderHandler.listOrder) // obtener orden
router.post('/orders', orderHandler.insertOrder) // insertar orden
router.patch('/orders/:id', orderHandler.updateOrder) // actualizar orden
router.delete('/orders/:id', orderHandler.deleteOrder) // eliminar orden

module.exports = router;
//otras rutas