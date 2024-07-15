/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return Promise.all([
        // Añadir claves foráneas a la tabla 'order'
        knex.schema.table('order', table => {
            table.integer('customer_id').unsigned().notNullable();
            table.foreign('customer_id').references('customer.id');
            
            table.integer('employee_id').unsigned();
            table.foreign('employee_id').references('employee.id');
        }),

        // Añadir claves foráneas a la tabla 'product'
        knex.schema.table('product', table => {
            table.integer('category_id').unsigned();
            table.foreign('category_id').references('category.id');
        })
    ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return Promise.all([
        // Eliminar claves foráneas de la tabla 'order'
        knex.schema.table('order', table => {
            table.dropForeign('customer_id');
            table.dropColumn('customer_id');
            
            table.dropForeign('employee_id');
            table.dropColumn('employee_id');
        }),

        // Eliminar claves foráneas de la tabla 'product'
        knex.schema.table('product', table => {
            table.dropForeign('category_id');
            table.dropColumn('category_id');
        })
    ]);
};
