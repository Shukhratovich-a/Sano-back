import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 2349;
const MAIL = process.env.MAIL;
const PASS = process.env.PASS;

export { PORT, MAIL, PASS };
