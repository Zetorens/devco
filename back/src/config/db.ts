import { PrismaClient } from "../generated/prisma/client.js"
import { DATABASE_URL } from "./env.js"

const prisma = new PrismaClient({
  datasourceUrl: DATABASE_URL,
})

export { prisma }
