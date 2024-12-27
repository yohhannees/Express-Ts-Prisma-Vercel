import { Request, Response } from "express";
import exampleService from "../services/example.service";

export const getExample = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const message = exampleService.getExampleMessage();
    return res.json({ message });
  } catch (error: any) {
    console.error("Error fetching example:", error);
    return res.status(500).json({ message: error.message });
  }
};
