import express from 'express'

import { userRouter } from './routes/userRouter'
import { categoryRouter } from './routes/categoryRouter'

const app = express()

app.use(express.json())
app.use('/api/v1', userRouter)
app.use('/api/v1/category', categoryRouter)

export default app
