import { FastifyInstance, FastifyReply, FastifyRequest, FastifyServerOptions } from "fastify";
import { userRepository } from "../repositories/User";
import { compare } from "bcryptjs";
export async function getToken(fastify: FastifyInstance, request: FastifyRequest, reply: FastifyReply) {
  const { username, password } = request.body as { username: string, password: string }
  const user = userRepository.findByUsername(username)
  if (!user) {
    reply.status(401).send(new Error("Username or password incorrect"))
  }
  const passwordMatch = await compare(password, user.password)

  if (!passwordMatch) {
    reply.status(401).send(new Error("Username or password incorrect"))
  }
  const payload = { user_id: user.id, username }
  const token = fastify.jwt.sign(
    { payload },
    {
      algorithm: 'HS256',
      expiresIn: 60 * 60 * 24 // 1 day
    })

  reply.send({ token })
}