export class UserRepository {
  private database: any[]
  constructor() {
    this.database = [
      {
        id: 'abc123',
        username: 'User1',
        password: '$2a$08$8wktIU0QEw2VdAPMw07iLebLZ0X67u4YSlb8FLEKw/I2ZvxG16zz2' //123456
      }
    ]
  }

  create(data: any) {
    this.database.push(data)
  }

  findAll() {
    const users = this.database.map(user => user)
    return users
  }

  findById(id: string) {
    const user = this.database.find(user => user.id === id)

    return user
  }
  findByUsername(username: string) {
    const user = this.database.find(user => user.username === username)
    return user
  }
}

export const userRepository = new UserRepository()