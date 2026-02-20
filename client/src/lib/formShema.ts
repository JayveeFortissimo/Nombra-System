import z from 'zod';

export const formLoginSchema = z.object({
    email:z.string().email().trim(),
    password:z.string().min(6, 'Password must be at least 6 characters long'),
    rememberMe: z.boolean().default(false).optional()
})