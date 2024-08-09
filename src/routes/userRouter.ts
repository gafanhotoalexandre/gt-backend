import { Router, Request, Response } from 'express'

import userController from '@/controllers/userController'
import { authMiddleware } from '@/middleware/authMiddleware'

const router = Router()

router.get('/users', authMiddleware, userController.getUsers)

router.get('/users/:id', userController.getUserById)
router.put('/users/:id', authMiddleware, userController.updateUser)
router.delete('/users/:id', authMiddleware, userController.deleteUser)
router.post('/login', userController.loginUser)

router.get('/users-test', (req: Request, res: Response) =>
  res.json({ ok: 'ok' })
)

// Outras rotas...

export default router
