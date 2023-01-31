import dotenv from 'dotenv'
dotenv.config()
import { join } from 'node:path'

import fastify from "fastify";
import autoLoad from '@fastify/autoload'

const app = fastify({ logger: true })

app.register(autoLoad, {
  dir: join(__dirname, 'plugins')
})

app.register(autoLoad, {
  dir: join(__dirname, 'routes')
})

const start = async () => {
  try {
    await app.listen({ port: Number(process.env.PORT) })
  } catch (error) {
    app.log.error(error)
    process.exit(1)
  }
}
start()