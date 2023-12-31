const fastify = require('fastify')({
    logger: true,
});

fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
});

fastify.get('/home', function (request, reply) {
    reply.status(200).send({ hello: 'Амира' })
});

fastify.listen({ host: '0.0.0.0', port: 8080 }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
});