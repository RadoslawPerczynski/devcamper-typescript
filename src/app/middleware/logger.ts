import { Request, Response, NextFunction } from 'express';

// I am not using this logger because there is a library for it - 'morgan'. This was just an excercise for middleware creation.
export const logger = (req: Request, res: Response, next: NextFunction) => {
  const method: string = req.method;
  const protocol: string = req.protocol;
  const url: string = req.originalUrl;

  console.log(
    `Middleware run. Method: ${method}. Protocol: ${protocol}. URL: ${url}. Time: ${Date.now()}`
  );
  next();
};
