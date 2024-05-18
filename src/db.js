import mongoose, { mongo } from "mongoose";

mongoose.connect(process.env.DB_URL, {});

const handleOpen = () => console.log("✅ Connection to DB");
const handleError = (error) => console.log("🔥 DB Error", error);

mongoose.connection.once("open", handleOpen);
mongoose.connection.on("error", handleError);
