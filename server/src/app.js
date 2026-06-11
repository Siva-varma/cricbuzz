import express from "express";
import env from "./config/env.js";
import morgan from "morgan";
import { securityMiddleware } from "./middlewares/security.middleware.js";

export default function createApp() {
  const app = express();

  // 
  if (env.NODE_ENV === "development") {
    app.use(morgan('dev'));
  }
  //security middlewares
  securityMiddleware(app)

  // health route
  app.get("/health", (req, res) => {
    res.json({
      success: true,
      message: "healthy",
    });
  });

  return app;
}
