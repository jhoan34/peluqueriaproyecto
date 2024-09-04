import { Router } from "express";
import getCitas from "../controllers/controllers.js"

const router = Router();

router.post("/agendarCitas", getCitas.agendarCitas)

export default router