// importar librerias
const express = require('express'); //framework de desarrollo
const knex = require('./db'); //llamado a conf de db
const routes = require('./routes'); //llamado a rutas

const app = express(); // creamos una nueva instancia
const port = 3000; // puerto de salida

// Configurar EJS, -------------------------------esto es añadido los 2 apps
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.json()); // configura tipo de dato json

app.use('/api', routes); // configura la url base y rutas

// Ruta para servir la vista principal, -----------esto es añadido
app.get('/', async (req, res) => {
    try {
        const customers = await knex('customer').select('*');
        res.render('index', { customers });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para manejar la inserción de nuevos clientes, -------------------esto es añadido
app.post('/add-customer', async (req, res) => {
    try {
        await knex('customer').insert(req.body);
        res.redirect('/');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.listen(port, () => { //ejecuta la api por el puerto 3000
    // luego de ejecutar imprime un mensaje
    console.log(`Servidor corriendo en el puerto ${port}`) //
})