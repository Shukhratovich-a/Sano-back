import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

import { PORT } from "./config.js";
import modules from "./module/modules.js";

const server = express();

server.use(express.json());
server.use(cors());
server.use(express.static(path.join(process.cwd(), "uploads")));

server.use(modules);

server.use((error, req, res, next) => {
  if (error.status != 500) {
    return res.status(error.status).json({
      status: error.status,
      message: error.message,
    });
  }

  fs.appendFileSync(
    path.join(process.cwd(), "src", "log.txt"),
    `${req.url}___${error.name}___${new Date(Date.now())}___${error.status}___${error.message}\n`
  );

  res.status(error.status).json({
    status: error.status,
    message: "InternalServerError",
  });

  process.exit();
});

server.listen(PORT, () => console.log("server is run: " + PORT));
