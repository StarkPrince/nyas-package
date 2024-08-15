import { NextFunction, Request, Response } from "express";
import { ZodError, ZodSchema } from "zod";

export const validate =
  (schema: ZodSchema<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json(err.errors);
      }
      next(err);
    }
  };
