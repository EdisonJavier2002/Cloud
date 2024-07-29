/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('employee', function(table){
        table.integer('age');
        table.string('surname');
        table.string('address');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('employee', function(table){
        table.dropColumn('age');
        table.dropColumn('surname');
        table.dropColumn('address');
      });
};
