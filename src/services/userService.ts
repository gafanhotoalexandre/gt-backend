import bcrypt from 'bcrypt'

import { prisma } from '@/config/database'
import { User, userSchema } from '@/models/User'

class UserService {
  async createUser(data: User): Promise<User> {
    const validatedData = userSchema.parse(data) // Validação aqui
    const hashedPassword = await bcrypt.hash(data.password, 10)

    return await prisma.user.create({
      data: { ...validatedData, password: hashedPassword },
    })
  }

  async getAllUsers(): Promise<Partial<User>[]> {
    return await prisma.user.findMany({
      select: {
        id: true,
        firstname: true,
        surname: true,
        email: true,
      },
    })
  }

  // Outros métodos de serviço...
  async getUserById(id: number): Promise<Partial<User> | null> {
    return await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        firstname: true,
        surname: true,
        email: true,
      },
    })
  }

  async updateUser(id: number, data: Partial<User>): Promise<void> {
    const validatedData = userSchema.partial().parse(data)

    await prisma.user.update({
      where: { id },
      data: validatedData,
    })
  }

  async deleteUser(id: number): Promise<void> {
    await prisma.user.delete({
      where: { id },
    })
  }

  async loginUser(email: string, password: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (user && (await bcrypt.compare(password, user.password))) {
      return user
    }

    return null
  }
}

export default new UserService()
