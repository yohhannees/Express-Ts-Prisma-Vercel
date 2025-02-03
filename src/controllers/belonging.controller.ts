import { Request, Response } from "express";
import * as belongingService from "../services/belonging.service";
import { AppError } from "../utils/appError";
import { ResponseMessage } from "../utils/responseMessage";
import { Belonging, User } from "@prisma/client";
import { Ibelonging } from "../Interface/Ibelonging";

export const getAllBelongings = async (
  req: Request,
  res: Response
): Promise<void> => {
  const belongings = await belongingService.getAllBelongings();
  if (!belongings) throw new AppError(404, "Belonging not found");
  ResponseMessage.responedWithSuccess<Belonging[]>(res, belongings, 200);
};

export const getBelongingByTelegramId = async (
  req: Request,
  res: Response
): Promise<void> => {
  const belonging = await belongingService.getBelongingByTelegramId(
    req.params.telegramId
  );
  if (!belonging) throw new AppError(404, "Belonging not found in this id");
  ResponseMessage.responedWithSuccess<Belonging>(res, belonging, 200);
};

export const createBelonging = async (
  req: Request,
  res: Response
): Promise<void> => {
  const belonging = await belongingService.createBelonging(req.body);
  if (!belonging)
    throw new AppError(400, "The request could not be understood");
  ResponseMessage.responedWithSuccess<Belonging>(res, belonging, 201);
};

export const updateBelonging = async (
  req: Request,
  res: Response
): Promise<void> => {
  const belonging = await belongingService.updateBelonging(
    req.params.telegramId,
    req.body
  );
  if (!belonging)
    throw new AppError(400, "The request could not be understood");
  ResponseMessage.responedWithSuccess<Belonging>(res, belonging, 200);
};

export const deleteBelonging = async (
  req: Request,
  res: Response
): Promise<void> => {
  await belongingService.deleteBelonging(req.params.telegramId);
  ResponseMessage.responedWithSuccess<string>(res, "deleted", 200);
};
