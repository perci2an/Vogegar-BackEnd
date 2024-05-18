import "dotenv/config";
import "./db";
import "./models/video";
import "./models/User";
import app from "./server";

const PORT = 7000;

const handleListening = () => {
  console.log(`✅ server on port http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
