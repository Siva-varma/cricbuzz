import mongoose from "mongoose";
import logger from "../config/logger.js";
import env from "../config/env.js";


export const connectDB = async () => {
const db= await mongoose.connect(env.MONGO_URL);
logger.info({dbHost:db.connection.host},"mongodb connected")
}