import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: z.string().min(6, 'Please enter a valid phone number'),
  childAge: z.string().min(1, "Please enter your child's age"),
  concern: z.string().min(1, 'Please describe the area of concern'),
  message: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactSchema>
