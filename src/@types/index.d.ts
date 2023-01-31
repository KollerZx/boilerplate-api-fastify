import * as fastify from 'fastify'
import { FastifyInstance } from 'fastify'
import * as http from 'node:http'

declare module 'fastify' {
  export interface FastifyInstance extends FastifyInstance<
    > {
    authenticate: any
  }
}