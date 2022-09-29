import { Router } from "express";

import controller from "./controller.js";
import validation from "../../middlewares/validation.js";

const router = Router();

router.post("/message", validation, controller.POST);

export default router;
