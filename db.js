//creamos instancias
const Knex = require('knex') // lamada a la libreria knex
const { Model } = require('objection') // llamada al model de objection
const knexConfig = require('./knexfile') // llamada a configuración

//Definimos una variable
const knex = Knex(knexConfig.development); //inicializar el objeto
Model.knex(knex); // configurar objection con datos de knex

module.exports = knex; // exportar configuración

