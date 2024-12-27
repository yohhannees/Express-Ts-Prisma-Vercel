import { Router } from "express";
import { getExample } from "../controllers/example.controller";

const router = Router();

router.get("/", getExample);

export default router;
