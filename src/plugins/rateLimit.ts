
import { FastifyInstance, FastifyPluginOptions } from "fastify";
import fp from "fastify-plugin";
import limit from '@fastify/rate-limit'

async function rateLimit(fastify: FastifyInstance, opts: FastifyPluginOptions) {
  fastify
    .register(limit, {
      max: 100,
      timeWindow: '1 minute'
    })
}
export default fp(rateLimit)