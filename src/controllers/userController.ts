import { Request, Response } from 'express'

import userService from '@/services/userService'
import { errorResponse, successResponse } from '@/utils/response'

export class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const user = await userService.createUser(req.body)
      successResponse(res, user)
    } catch (error) {
      errorResponse(res, error)
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const user = await userService.getUserById(Number(req.params.id))
      if (user) {
        successResponse(res, user)
      } else {
        res.status(404).json({ message: 'User not found' })
      }
    } catch (error) {
      errorResponse(res, error)
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      await userService.updateUser(Number(req.params.id), req.body)
      res.status(204).send()
    } catch (error) {
      errorResponse(res, error)
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      await userService.deleteUser(Number(req.params.id))
      res.status(204).send()
    } catch (error) {
      errorResponse(res, error)
    }
  }

  async loginUser(req: Request, res: Response) {
    try {
      const { email, password } = req.body
      const result = await userService.loginUser(email, password)
      if (result) {
        // Retorna o token e o usuário
        successResponse(res, { user: result.user, token: result.token })
      } else {
        res.status(401).json({ message: 'Invalid credentials' })
      }
    } catch (error) {
      errorResponse(res, error)
    }
  }

  // opcional e para testes
  async getUsers(req: Request, res: Response) {
    try {
      const users = await userService.getAllUsers()
      successResponse(res, users)
    } catch (error) {
      errorResponse(res, error)
    }
  }
}

export default new UserController()
