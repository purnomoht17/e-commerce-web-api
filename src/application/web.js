import express from "express";
import cors from "cors";

import {errorMiddleware} from "../middleware/error-middleware.js"

export const web = express();

web.use(cors({
    origin: [
        "http://localhost:3000",
    ],
    credentials: true
}))

web.use(express.json());

web.use(errorMiddleware);