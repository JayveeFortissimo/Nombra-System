import z from "zod";

export const formLoginSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  rememberMe: z.boolean().default(false).optional(),
});

export const formRegisterSchema = z
  .object({
    email: z.string().email().trim(),
    userName: z.string().min(3, "Username must be at least 4 characters long"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
  });
