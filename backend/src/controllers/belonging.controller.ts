import { Request, Response } from "express";
import * as belongingService from "../services/belonging.service";

export const getAllBelongings = async (
  req: Request,
  res: Response
): Promise<void> => {
  const belongings = await belongingService.getAllBelongings();
  res.json(belongings);
};

export const getBelongingByTelegramId = async (
  req: Request,
  res: Response
): Promise<void> => {
  const belonging = await belongingService.getBelongingByTelegramId(
    req.params.telegramId
  );
  if (belonging) {
    res.json(belonging);
  } else {
    res.status(404).json({ message: "Belonging not found" });
  }
};

export const createBelonging = async (
  req: Request,
  res: Response
): Promise<void> => {
  const belonging = await belongingService.createBelonging(req.body);
  res.status(201).json(belonging);
};

export const updateBelonging = async (
  req: Request,
  res: Response
): Promise<void> => {
  const belonging = await belongingService.updateBelonging(
    req.params.telegramId,
    req.body
  );
  res.json(belonging);
};

export const deleteBelonging = async (
  req: Request,
  res: Response
): Promise<void> => {
  await belongingService.deleteBelonging(req.params.telegramId);
  res.status(204).send();
};
