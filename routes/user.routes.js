const controller = require('../controller/user.controller');

//define schema for user route body

async function routes(fastify, options) {
  const addSchema = {
    body: {
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string' }
      }
    }
  };
  fastify.get('/', controller.getUsers);
  fastify.get('/:id', controller.getUser);
  fastify.post('/',  {schema:addSchema}, controller.addUser);
}

module.exports = routes;
