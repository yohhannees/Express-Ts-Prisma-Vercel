import { Router } from "express";
import {
  getAllQRCodes,
  getQRCodeByTelegramId,
  createQRCode,
  updateQRCode,
  deleteQRCode,
} from "../controllers/qrcode.controller";
import { catchAsync } from "../utils/catchAsync";

const router = Router();

router
  .route("/qr-codes")
  .get(catchAsync(getAllQRCodes))
  .post(catchAsync(createQRCode));
router
  .route("/qr-codes/:telegramId")
  .get(catchAsync(getQRCodeByTelegramId))
  .put(catchAsync(updateQRCode))
  .delete(catchAsync(deleteQRCode));

export default router;
