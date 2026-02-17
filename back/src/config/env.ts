const PORT = process.env.BACK_PORT || 5000;
const DATABASE_URL = process.env.DATABASE_URL || "";
const FRONT_URL = process.env.FRONT_URL || "http://localhost:3000";

export { PORT, DATABASE_URL, FRONT_URL };
