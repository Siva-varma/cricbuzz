import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import hpp from "hpp";
import compression from "compression";
import express from "express";
import env from "../config/env.js";
import logger from "../config/logger.js";

export function securityMiddleware(app) {
  app.use(helmet());
  app.use(
    cors({
      origin: env.CORS_ORIGIN.split(",").map((origin) => origin.trim()),
    }),
  );

  //making it to allow 100req/15min
  app.use(
    rateLimit({
      windowMs: env.RATELIMIT_WINDOWMS,
      limit: env.RATELIMIT,
      legacyHeaders: true,
      message: "too many requests. please try after sometime",
    }),
  );
  app.use(hpp());
  app.use(compression());

  //setting max file limit to 3mb
  app.use(express.json({ limit: "3mb" }));
  app.use(express.urlencoded({ extended: true, limit: "3mb" }));
}
