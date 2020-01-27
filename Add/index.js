const df = require("durable-functions");
const Counter = require("../entities/counter");

module.exports = async function (context, req) {
  const client = df.getClient(context);
  const entityId = new df.EntityId("Counter", "myCounter");
  await client.signalEntity(entityId, new Counter(), c => c.add(1));
};
