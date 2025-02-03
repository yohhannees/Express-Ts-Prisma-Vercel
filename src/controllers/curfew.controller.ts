import { Request, Response } from "express";
import * as curfewRuleService from "../services/curfew.service";
import { AppError } from "../utils/appError";
import { ResponseMessage } from "../utils/responseMessage";
import { CurfewRule } from "@prisma/client";

export const getAllCurfewRules = async (
  req: Request,
  res: Response
): Promise<void> => {
  const curfewRules = await curfewRuleService.getAllCurfewRules();
  if (!curfewRules) throw new AppError(400, "something went wrong");
  ResponseMessage.responedWithSuccess<CurfewRule[]>(res, curfewRules, 200);
};

export const getCurfewRuleById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const curfewRule = await curfewRuleService.getCurfewRuleById(req.params.id);
  if (!curfewRule) throw new AppError(404, "the role not found");
  ResponseMessage.responedWithSuccess<CurfewRule>(res, curfewRule, 200);
};

export const createCurfewRule = async (
  req: Request,
  res: Response
): Promise<void> => {
  const curfewRule = await curfewRuleService.createCurfewRule(req.body);
  if (!curfewRule) throw new AppError(404, "something went wrong");
  ResponseMessage.responedWithSuccess<CurfewRule>(res, curfewRule, 200);
};

export const updateCurfewRule = async (
  req: Request,
  res: Response
): Promise<void> => {
  const curfewRule = await curfewRuleService.updateCurfewRule(
    req.params.id,
    req.body
  );
  if (!curfewRule) throw new AppError(400, "something wents wrong");
  ResponseMessage.responedWithSuccess<CurfewRule>(res, curfewRule, 200);
};

export const deleteCurfewRule = async (
  req: Request,
  res: Response
): Promise<void> => {
  const curfewId = await curfewRuleService.deleteCurfewRule(req.params.id);
  if (!curfewId) throw new AppError(400, "something went wrong");
  ResponseMessage.responedWithSuccess<string>(res, "deleted", 200);
};
