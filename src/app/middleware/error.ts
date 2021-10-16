import { NextFunction, Request, Response } from 'express';
import { ErrorResponse } from '../utils/errorResponse';

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.log(err.stack.red);
  // console.log(err.);

  let error = { ...err };
  // console.log(err);
  // console.log(error);

  error.message = err.message;

  if (err.name === 'CastError') {
    const message = `Resource not found with ID of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server error',
  });
};
