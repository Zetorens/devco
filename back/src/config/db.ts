import { PrismaClient } from "../generated/prisma/client.js"
import { DATABASE_URL } from "./env.js"

const prisma = new PrismaClient({
  accelerateUrl: DATABASE_URL,
})

export { prisma }
