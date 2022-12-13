import { Request, Response, NextFunction } from "express";
import { UserRepository } from "../../../repository";
import { AuthUseCase } from "../../../usecase";

const authUseCase = new AuthUseCase(new UserRepository());

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const idToken = req.headers["authorization"];
  const user = await authUseCase.checkIdToken(idToken);
  if (!user) return res.status(403).send();
  res.locals.id = user.id;
  res.locals.firebaseUid = user.firebase_uid;
  next();
};
