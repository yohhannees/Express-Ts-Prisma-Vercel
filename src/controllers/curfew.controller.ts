import { Request, Response } from "express";
import * as curfewRuleService from "../services/curfew.service";

export const getAllCurfewRules = async (
  req: Request,
  res: Response
): Promise<void> => {
  const curfewRules = await curfewRuleService.getAllCurfewRules();
  res.json(curfewRules);
};

export const getCurfewRuleById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const curfewRule = await curfewRuleService.getCurfewRuleById(req.params.id);
  if (curfewRule) {
    res.json(curfewRule);
  } else {
    res.status(404).json({ message: "Curfew Rule not found" });
  }
};

export const createCurfewRule = async (
  req: Request,
  res: Response
): Promise<void> => {
  const curfewRule = await curfewRuleService.createCurfewRule(req.body);
  res.status(201).json(curfewRule);
};

export const updateCurfewRule = async (
  req: Request,
  res: Response
): Promise<void> => {
  const curfewRule = await curfewRuleService.updateCurfewRule(
    req.params.id,
    req.body
  );
  res.json(curfewRule);
};

export const deleteCurfewRule = async (
  req: Request,
  res: Response
): Promise<void> => {
  await curfewRuleService.deleteCurfewRule(req.params.id);
  res.status(204).send();
};
