
import { PORT } from "./config/env.js";
import {createApp} from "./app.js";

const app = createApp();

app.listen(PORT, () => console.log(`🚀 API running on http://localhost:${PORT}`));
