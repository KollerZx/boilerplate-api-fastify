import dotenv from 'dotenv'
dotenv.config()
import { join } from 'node:path'

import fastify from "fastify";
import autoLoad from '@fastify/autoload'
const app = fastify({ logger: true })

const start = async () => {
  try {
    await app.register(autoLoad, {
      dir: join(__dirname, 'plugins')
    })

    await app.register(autoLoad, {
      dir: join(__dirname, 'routes')
    })

    app.setNotFoundHandler({
      preHandler: app.rateLimit({
        max: 3,
        timeWindow: '1 minute'
      })
    }, function (request, reply) {
      reply.code(404).send({ message: "Not found" })
    })

    await app.listen({ port: Number(process.env.PORT) })

  } catch (error) {
    app.log.error(error)
    process.exit(1)
  }
}
start()