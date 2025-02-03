import { Router } from "express";
import {
  getCurfewRuleById,
  getAllCurfewRules,
  createCurfewRule,
  updateCurfewRule,
  deleteCurfewRule,
} from "../services/curfew.service";
import { catchAsync } from "../utils/catchAsync";

const router = Router();

router
  .route("/curfew-rules")
  .get(catchAsync(getAllCurfewRules))
  .post(catchAsync(createCurfewRule));
router
  .route("/curfew-rules/:id")
  .get(catchAsync(getCurfewRuleById))
  .put(catchAsync(updateCurfewRule))
  .delete(deleteCurfewRule);

export default router;
