import dotenv, { parse } from "dotenv";
dotenv.config();
import z from "zod";
import logger from "./logger.js";

const envSchema = z.object({
  PORT: z.coerce.number(),
  MONGO_URL: z.string(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  logger.error("check your env's");
}

export default parsed.data;
