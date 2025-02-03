import { Request, Response } from "express";
import * as userService from "../services/users.service";
import { AppError } from "../utils/appError";
import { ResponseMessage } from "../utils/responseMessage";
import { User } from "@prisma/client";

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  const users = await userService.getAllUsers();
  if (!users) throw new AppError(404, "Something went wrong.");
  ResponseMessage.responedWithSuccess<User[]>(res, users, 200);
};

export const getUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const user = await userService.getUserByTelegramId(req.params.id);
  if (!user) throw new AppError(404, "user not fund");
  ResponseMessage.responedWithSuccess<User>(res, user, 200);
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const user = await userService.upsertUser(req.body);
  if (!user) throw new AppError(404, "something went wrong");
  ResponseMessage.responedWithSuccess<User>(res, user, 200);
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const user = await userService.updateUser(req.params.id, req.body);
  if (!user) throw new AppError(400, "something went wrong");
  ResponseMessage.responedWithSuccess<User>(res, user, 200);
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  await userService.deleteUser(req.params.id);
  ResponseMessage.responedWithSuccess<string>(res, "user deleted", 200);
};
