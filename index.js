// importar librerias
const express = require('express'); //framework de desarrollo
const path = require('path'); // Importar el módulo path, ------------esto es añadido
const knex = require('./db'); //llamado a conf de db
const routes = require('./routes'); //llamado a rutas

const app = express(); // creamos una nueva instancia
const port = 3000; // puerto de salida

// Middleware para analizar cuerpos de solicitudes URL-encoded
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configurar EJS, -------------------------------esto es añadido los 2 apps
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.json()); // configura tipo de dato json

app.use('/api', routes); // configura la url base y rutas

// RUTAS PARA LAS VISTAS--------------------------------------------------------------------------------
// Ruta para servir la vista principal con el menú
app.get('/', (req, res) => {
    res.render('index');
});

// Ruta para servir la vista de clientes
app.get('/customers', async (req, res) => {
    try {
        const customers = await knex('customer').select('*');
        res.render('customers', { customers });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para servir la vista de categorías
app.get('/categories', async (req, res) => {
    try {
        const categories = await knex('category').select('*');
        res.render('categories', { categories });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para servir la vista de empleados
app.get('/employees', async (req, res) => {
    try {
        const employees = await knex('employee').select('*');
        res.render('employees', { title: 'Employee Management', employees });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para servir la vista de productos
app.get('/products', async (req, res) => {
    try {
        const products = await knex('product').select('*');
        res.render('products', { title: 'Product Management', products });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para servir la vista de ordenes
app.get('/orders', async (req, res) => {
    try {
        const orders = await knex('order').select('*');
        res.render('orders', { title: 'Order Management', orders });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para manejar la inserción de nuevos clientes
app.post('/add-customer', async (req, res) => {
    try {
        await knex('customer').insert(req.body);
        res.redirect('/customers');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para manejar la inserción de nuevas categorías
app.post('/add-category', async (req, res) => {
    try {
        await knex('category').insert(req.body);
        res.redirect('/categories');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para manejar la inserción de nuevos empleados
app.post('/add-employee', async (req, res) => {
    try {
        await knex('employee').insert(req.body);
        res.redirect('/employees');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para manejar la inserción de nuevos productos
app.post('/add-product', async (req, res) => {
    try {
        await knex('product').insert(req.body);
        res.redirect('/products');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para manejar la inserción de nuevas ordenes
app.post('/add-order', async (req, res) => {
    try {
        await knex('order').insert(req.body);
        res.redirect('/orders');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => { //ejecuta la api por el puerto 3000
    // luego de ejecutar imprime un mensaje
    console.log(`Servidor corriendo en el puerto ${port}`) //
})