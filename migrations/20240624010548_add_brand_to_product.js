/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('product', function(table){
        table.string('brand');  //marca
        table.integer('stock');
        table.date('expiration'); //expiracion
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('product', function(table){
        table.dropColumn('brand');
        table.dropColumn('stock');
        table.dropColumn('expiration');
      });
};
