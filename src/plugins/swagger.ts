import { join } from 'node:path';

import { FastifyInstance, FastifyPluginOptions } from "fastify";
import fp from 'fastify-plugin'
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';

async function swaggerPlugin(fastify: FastifyInstance, opts: FastifyPluginOptions) {
  fastify.register(swagger, {
    mode: 'static',
    specification: {
      path: join(__dirname, '..', 'swagger-docs.json'),
      baseDir: './',
    }
  });

  fastify.register(swaggerUi, {
    routePrefix: '/docs',
    logLevel: 'silent',
  });
}

export default fp(swaggerPlugin)