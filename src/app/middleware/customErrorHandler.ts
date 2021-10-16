import { NextFunction, Request, Response } from 'express';
import { ErrorResponse } from '../utils/errorResponse';
import colors from 'colors';

export const customErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(colors.red.bold(err));

  let error = { ...err };

  error.message = err.message;

  if (err.name === 'CastError') {
    const message = `Resource not found with ID of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  // mongoose duplicate key
  if (err.code === 11000) {
    const message = `Duplicate field value entered`;
    error = new ErrorResponse(message, 400);
  }

  if (err.name === 'ValidationError') {
    // const message = `Duplicate field value entered`;

    const arrOfErrors = Object.values(err.errors).map(
      (val: any) => val.message
    );
    error = new ErrorResponse(arrOfErrors.join(', '), 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Something went wrong',
  });
};
