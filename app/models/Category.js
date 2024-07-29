const { Model} = require('objection'); //llamar al Model de la lib objection

class Category extends Model { //creo herencia de model
    static get tableName(){ //especifica el nombre de la tabla
        return 'category';
    }

    static get jsonSchema(){ //especifica la estructura de la tabla
        return {
            type: 'object', // se usa object para un dato y array para una lista
            required: ['name', 'description'],

            properties: { //estructura de los campos
                id: { type: 'integer' },
                name: { type: 'string', minLength: 1 },
                description: { type: 'string' },
                code: { type: 'string' },
                status: { type: 'string' },
                color: { type: 'string' }
            }
        };

    }


    static async getCategorys(){ //metodo para listar categorias
        return await Category.query(); // select * from category
    }

    static async insert(data){ // metodo para insertar categoria
        return await Category.query().insert(data); // insert into category values ...
    }


    static async update(data, id){ // metodo para editar ategoria
        return await Category.query().patch(id, data); // update set data where id = 0
    }

    static async delete(id){ // metodo para eliminar ategoria
        return await Category.query().deleteById(id); //delete from category where id = 0
    }

}


module.exports = Category;