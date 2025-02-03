import { Request, Response } from "express";
import * as qrCodeService from "../services/qrcode.service";
import { AppError } from "../utils/appError";
import { ResponseMessage } from "../utils/responseMessage";
import { QRCode } from "@prisma/client";

export const getAllQRCodes = async (
  req: Request,
  res: Response
): Promise<void> => {
  const qrCodes = await qrCodeService.getAllQRCodes();
  if (!qrCodes) throw new AppError(400, "something wents wrong");
  ResponseMessage.responedWithSuccess<QRCode[]>(res, qrCodes, 200);
};

export const getQRCodeByTelegramId = async (
  req: Request,
  res: Response
): Promise<void> => {
  const qrCode = await qrCodeService.getQRCodeByTelegramId(
    req.params.telegramId
  );
  if (!qrCode) throw new AppError(404, "there is no qrcode in this id");
  ResponseMessage.responedWithSuccess<QRCode>(res, qrCode, 200);
};

export const createQRCode = async (
  req: Request,
  res: Response
): Promise<void> => {
  const qrCode = await qrCodeService.createQRCode(req.body);
  if (!qrCode) throw new AppError(400, "something went wrong");
  ResponseMessage.responedWithSuccess<QRCode>(res, qrCode, 200);
};

export const updateQRCode = async (
  req: Request,
  res: Response
): Promise<void> => {
  const qrCode = await qrCodeService.updateQRCode(
    req.params.telegramId,
    req.body
  );
  if (!qrCode) throw new AppError(404, "someting wents wrong");
  ResponseMessage.responedWithSuccess<QRCode>(res, qrCode, 200);
};

export const deleteQRCode = async (
  req: Request,
  res: Response
): Promise<void> => {
  const qrcodeId = await qrCodeService.deleteQRCode(req.params.telegramId);
  if (qrcodeId) throw new AppError(400, "something wents wrong");
  ResponseMessage.responedWithSuccess<string>(res, "deleted", 200);
};
