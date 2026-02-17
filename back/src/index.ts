import express from "express"
import helmet from "helmet"

const app = express()
const PORT = process.env.BACK_PORT || 3000

app.use(helmet())
app.use(express.json())

app.listen(PORT, () => console.log(`🚀 API running on http://localhost:${PORT}`))
