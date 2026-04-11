import {z} from "zod";

export const loginSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Minimum 6 characters")
});

export type LoginFormData = z.infer<typeof loginSchema>;
 
export const signupSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
});

export type SignUpFormData = z.infer<typeof signupSchema>