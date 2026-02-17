import express from "express"
import helmet from "helmet"
import cors from "cors"
import { corsOptions } from "./config/cors.js"
import { helmetOptions } from "./config/helmet.js"
import {initRoutes} from "./config/routes.js";

const createApp = () => {
    const app = express()

    app.use(helmet(helmetOptions))
    app.use(cors(corsOptions))
    app.use(express.json());

    initRoutes(app);

    return app
}

export { createApp }
