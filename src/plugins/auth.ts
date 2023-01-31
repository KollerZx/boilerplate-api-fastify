import dotenv from 'dotenv'
dotenv.config()

import fp from "fastify-plugin";
import jwt from '@fastify/jwt'
import { FastifyInstance, FastifyPluginOptions } from "fastify";

import { getToken } from '../middlewares/getToken';
import { ensureAuthentication } from '../middlewares/ensureAuthentication';


async function authPlugin(fastify: FastifyInstance, opts: FastifyPluginOptions) {
  fastify
    .register(jwt, { secret: String(process.env.SECRET) })
    .post('/login', (request, reply) => getToken(fastify, request, reply))
    .decorate("authenticate", ensureAuthentication)

}

export default fp(authPlugin)