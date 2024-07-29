const { Model } = require('objection');

class Order extends Model {
    static get tableName() {
        return 'order';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['number', 'date'],

            properties: {
                id: { type: 'integer' },
                number: { type: 'string', minLength: 1 },
                date: { type: 'string', format: 'date' },
                address: { type: 'string' },
                status: { type: 'string' },
                amount: { type: 'integer' },
                customer_id: { type: 'integer' },
                employee_id: { type: 'integer' }
            }
        };
    }

    static async getOrders() {
        return await Order.query();
    }

    static async insert(data) {
        return await Order.query().insert(data);
    }

    static async update(data, id) {
        return await Order.query().patchAndFetchById(id, data);
    }

    static async delete(id) {
        return await Order.query().deleteById(id);
    }
}

module.exports = Order;