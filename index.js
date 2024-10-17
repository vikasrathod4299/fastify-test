const fastify = require("fastify")({ logger: true });
const userRoutes = require("./routes/user.routes.js");

fastify.register(userRoutes, {prefix:"/api/users"});

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host:'localhost' });
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
