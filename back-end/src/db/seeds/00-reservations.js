exports.seed = function (knex) {
  return knex.raw("TRUNCATE TABLE reservation_list RESTART IDENTITY CASCADE");
};
