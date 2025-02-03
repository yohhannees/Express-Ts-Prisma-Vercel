import { Router } from "express";
import {
  getAllBelongings,
  getBelongingByTelegramId,
  createBelonging,
  updateBelonging,
  deleteBelonging,
} from "../services/belonging.service";
import { catchAsync } from "../utils/catchAsync";
const router = Router();

router
  .route("/belongings")
  .get(catchAsync(getAllBelongings))
  .post(catchAsync(createBelonging));
router
  .route("/belongings/:telegramId")
  .get(catchAsync(getBelongingByTelegramId))
  .put(catchAsync(updateBelonging))
  .delete(catchAsync(deleteBelonging));

export default router;
