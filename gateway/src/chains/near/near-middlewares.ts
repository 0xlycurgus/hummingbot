import { Near } from './near';
import { NextFunction, Request, Response } from 'express';

export const verifySolanaIsAvailable = async (
  _req: Request,
  _res: Response,
  next: NextFunction
) => {
  const solana = Near.getInstance();
  if (!solana.ready()) {
    await solana.init();
  }
  return next();
};
