import { z } from 'zod'

export const userSchema = z.object({
  id: z.number().int(),
  firstname: z.string().min(1),
  surname: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
})

export type User = z.infer<typeof userSchema>
