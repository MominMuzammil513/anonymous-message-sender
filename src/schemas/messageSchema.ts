import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "content must be at least of 10 characters" })
    .max(100, { message: "content must be at most of 100 characters"})
});
