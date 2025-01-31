import { Router } from "express";
import * as qrCodeController from "../controllers/qrcode.controller";

const router = Router();

router.get("/qr-codes", qrCodeController.getAllQRCodes);
router.get("/qr-codes/:telegramId", qrCodeController.getQRCodeByTelegramId);
router.post("/qr-codes", qrCodeController.createQRCode);
router.put("/qr-codes/:telegramId", qrCodeController.updateQRCode);
router.delete("/qr-codes/:telegramId", qrCodeController.deleteQRCode);

export default router;
