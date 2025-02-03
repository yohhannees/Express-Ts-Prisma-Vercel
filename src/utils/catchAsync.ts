import { NextFunction, Request, Response } from "express";
import { ResponseMessage } from "./responseMessage";

export const catchAsync = (fn: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (err: any) {
      ResponseMessage.responedWithError(
        res,
        err.statusCode ? (err.statusCode < 500 ? "error" : "fail") : "fail",
        err,
        err.statusCode ?? 500
      );
    }
  };
};
