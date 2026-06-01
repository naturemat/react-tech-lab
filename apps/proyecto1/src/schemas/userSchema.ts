import { z } from "zod";

export const userRegistrationSchema = z.object({
  nombre: z
    .string()
    .min(1, "El nombre es obligatorio")
    .min(3, "El nombre debe tener al menos 3 caracteres"),
  email: z
    .string()
    .min(1, "El email es obligatorio")
    .email("Debe ser un email válido"),
});

export type UserRegistrationFormData = z.infer<typeof userRegistrationSchema>;
