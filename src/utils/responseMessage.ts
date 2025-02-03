import { Response } from "express";
import { IRespondSuccess } from "../types/IRespondSuccess";
import { AppError } from "./appError";
import { AppErrorCodes, UnitError } from "../types/ServerResponseData";
import { IRespondError } from "../types/IRespondError";

export class ResponseMessage {
  public static responedWithSuccess<T>(
    res: Response,
    data: T,
    statusCode: number
  ) {
    const response: IRespondSuccess<T> = {
      status: "success",
      data: data,
    };
    res.status(statusCode).json(response);
  }

  public static responedWithError(
    res: Response,
    status: "error" | "fail",
    statusCode: number,
    error: AppError,
    errorCode?: AppErrorCodes
  ) {
    const response: IRespondError = {
      status: status,
      error: {
        errorCode: errorCode ? errorCode : "INTERNAL_ERROR",
        message: error.message,
        errors: error.errors ? error.errors : undefined,
      },
    };
    res.status(statusCode).json(response);
  }
}
