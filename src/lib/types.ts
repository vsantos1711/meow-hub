import { z } from "zod";

export const registerSchema = z
  .object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email(),
    password: z.string().min(3, "Password must be at least 3 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
export type TRegisterSchema = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});
export type TLoginSchema = z.infer<typeof loginSchema>;

export const recoverySchema = z.object({
  email: z.string().email(),
  activationCode: z.string(),
});
export type TRecoverySchema = z.infer<typeof recoverySchema>;

export const commentSchema = z.object({
  comment: z.string().min(1).max(160),
});
export type TCommentSchema = z.infer<typeof commentSchema>;
