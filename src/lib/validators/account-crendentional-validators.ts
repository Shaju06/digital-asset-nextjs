import { z } from "zod";
export const AuthCredentionalValidator = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be atleast 8 characters long.",
  }),
});

export type TAuthCrendentionalsValidator = z.infer<
  typeof AuthCredentionalValidator
>;
