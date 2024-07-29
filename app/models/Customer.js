const { Model} = require('objection'); //llamar al Model de la lib objection

class Customer extends Model { //creo herencia de model
    static get tableName(){ //especifica el nombre de la tabla
        return 'customer';
    }

    static get jsonSchema(){ //especifica la estructura de la tabla
        return {
            type: 'object', // se usa object para un dato y array para una lista
            required: ['name', 'email'],

            properties: { //estructura de los campos
                id: { type: 'integer' },
                name: { type: 'string', minLength: 1 },
                email: { type: 'string', format: 'email' },
                age: { type: 'integer' },
                surname: { type: 'string', minLength: 1 },
                address: { type: 'string', minLength: 1 },
            }
        };

    }


    static async getCustomers(){ //metodo para listar clientes
        return await Customer.query(); // select * from customer
    }

    static async insert(data){ // metodo para insertar clientes
        return await Customer.query().insert(data); // insert into customer values ...
    }


    static async update(data, id){ // metodo para editar cliente
        return await Customer.query().patchAndFetchById(id, data); // update set data where id = 0
    }

    static async delete(id){ // metodo para eliminar cliente
        return await Customer.query().deleteById(id); //delete from customer where id = 0
    }

}


module.exports = Customer;