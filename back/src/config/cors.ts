import cors from "cors"

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
}

const openCors = cors()

export { corsOptions, openCors }
