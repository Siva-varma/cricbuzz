import dotenv, { parse } from "dotenv";
dotenv.config();
import z from "zod";
import logger from "./logger.js";
import appConstant from "../constant/app.constant.js";

const envSchema = z.object({
  PORT: z.coerce.number().default(appConstant.PORT),
  MONGO_URL: z.string().default(appConstant.MONGO_URL),
  NODE_ENV: z.string().default(appConstant.NODE_ENV)
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  logger.error("check your env's");
}

export default parsed.data;
