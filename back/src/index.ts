import { createApp } from "./config/app.js";
import { PORT } from "./config/env.js";

const app = createApp();

app.listen(PORT, () => console.log(`🚀 API running on http://localhost:${PORT}`));
