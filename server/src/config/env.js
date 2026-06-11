import dotenv, { parse } from "dotenv";
dotenv.config();
import z from "zod";

const envSchema = z.object({
  PORT: z.coerce.number(),
  MONGO_URL: z.string(),
});

const parsed = envSchema.parse(process.env);

if (!parsed.success) {
  console.log("check your env's");
}

export default parsed;
