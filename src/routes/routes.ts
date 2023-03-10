import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import fp from 'fastify-plugin'

async function routes(fastify: FastifyInstance, opts: FastifyPluginOptions) {
  fastify.get("/", async (request, reply) => {
    reply.send({ message: "Hello World" })
  })

  fastify.get("/private", { onRequest: fastify.authenticate }, async (request, reply) => {
    reply.send({ message: "Hello World" })
  })
}

export default fp(routes)