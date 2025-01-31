import { Request, Response } from "express";
import * as userService from "../services/users.service";

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  const users = await userService.getAllUsers();
  res.json(users);
};

export const getUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const user = await userService.getUserByTelegramId(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const user = await userService.upsertUser(req.body);
  res.status(201).json(user);
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const user = await userService.updateUser(req.params.id, req.body);
  res.json(user);
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  await userService.deleteUser(req.params.id);
  res.status(204).send();
};
