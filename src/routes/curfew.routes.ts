import { Router } from "express";
import * as curfewRuleController from "../controllers/curfew.controller";

const router = Router();

router.get("/curfew-rules", curfewRuleController.getAllCurfewRules);
router.get("/curfew-rules/:id", curfewRuleController.getCurfewRuleById);
router.post("/curfew-rules", curfewRuleController.createCurfewRule);
router.put("/curfew-rules/:id", curfewRuleController.updateCurfewRule);
router.delete("/curfew-rules/:id", curfewRuleController.deleteCurfewRule);

export default router;
