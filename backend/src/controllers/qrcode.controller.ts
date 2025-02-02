import { Request, Response } from "express";
import * as qrCodeService from "../services/qrcode.service";

export const getAllQRCodes = async (
  req: Request,
  res: Response
): Promise<void> => {
  const qrCodes = await qrCodeService.getAllQRCodes();
  res.json(qrCodes);
};

export const getQRCodeByTelegramId = async (
  req: Request,
  res: Response
): Promise<void> => {
  const qrCode = await qrCodeService.getQRCodeByTelegramId(
    req.params.telegramId
  );
  if (qrCode) {
    res.json(qrCode);
  } else {
    res.status(404).json({ message: "QR Code not found" });
  }
};

export const createQRCode = async (
  req: Request,
  res: Response
): Promise<void> => {
  const qrCode = await qrCodeService.createQRCode(req.body);
  res.status(201).json(qrCode);
};

export const updateQRCode = async (
  req: Request,
  res: Response
): Promise<void> => {
  const qrCode = await qrCodeService.updateQRCode(
    req.params.telegramId,
    req.body
  );
  res.json(qrCode);
};

export const deleteQRCode = async (
  req: Request,
  res: Response
): Promise<void> => {
  await qrCodeService.deleteQRCode(req.params.telegramId);
  res.status(204).send();
};
