/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('order', function(table){
        table.string('address');  //marca
        table.string('status'); //estado
        table.integer('amount'); //cantidad
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('order', function(table){
        table.dropColumn('address');
        table.dropColumn('status');
        table.dropColumn('amount');
      });
};
