const df = require("durable-functions");
const Counter = require("../entities/counter");

module.exports = df.entity(async function (context) {
  await context.df.dispatch(() => new Counter());
});
