import "dotenv/config";
import "./db.js";
import "./models/video.js";
import "./models/User.js";
import app from "./server.js";

const PORT = 7777;

const handleListening = () => {
  console.log(`✅ server on port http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
