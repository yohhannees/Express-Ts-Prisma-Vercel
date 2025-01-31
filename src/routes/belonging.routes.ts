import { Router } from "express";
import * as belongingController from "../controllers/belonging.controller";

const router = Router();

router.get("/belongings", belongingController.getAllBelongings);
router.get(
  "/belongings/:telegramId",
  belongingController.getBelongingByTelegramId
);
router.post("/belongings", belongingController.createBelonging);
router.put("/belongings/:telegramId", belongingController.updateBelonging);
router.delete("/belongings/:telegramId", belongingController.deleteBelonging);

export default router;
