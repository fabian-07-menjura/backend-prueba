import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const handleInputErrors: (
  req: Request,
  res: Response,
  next: NextFunction
) => void = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
