/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('category', function(table){
        table.string('code');  //marca
        table.string('status'); //estado
        table.string('color'); //color
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('category', function(table){
        table.dropColumn('code');
        table.dropColumn('status');
        table.dropColumn('color');
      });
};
