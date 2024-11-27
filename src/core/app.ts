import Server from "./server";
import dotenv from "dotenv"
dotenv.config();

const port = parseInt(process.env.SERVER_PORT || "3000");
const server = new Server(port)

server.start();
