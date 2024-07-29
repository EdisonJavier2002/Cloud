const { Model } = require('objection');

class Product extends Model {
    static get tableName() {
        return 'product';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name'],

            properties: {
                id: { type: 'integer' },
                name: { type: 'string', minLength: 1 },
                description: { type: 'string' },
                brand: { type: 'string' },
                stock: { type: 'integer' },
                expiration: { type: 'string', format: 'date' },
                category_id: { type: 'integer' }
            }
        };
    }

    static async getProducts() {
        return await Product.query();
    }

    static async insert(data) {
        return await Product.query().insert(data);
    }

    static async update(data, id) {
        return await Product.query().patchAndFetchById(id, data);
    }

    static async delete(id) {
        return await Product.query().deleteById(id);
    }
}

module.exports = Product;
