import { ServerResponseData } from "./ServerResponseData";

export interface IRespondError {
  status: "error" | "fail";
  error: ServerResponseData;
}
