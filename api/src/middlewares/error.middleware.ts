import { Request, Response, NextFunction } from 'express';
import config from '../infrastructure/config';
import ResponseFactory from '../factories/response.factory';
import { DefaultException } from '../exceptions';
import { ErrorCodes } from '../enums';
//

export default (err: string | Error | DefaultException, _req: Request, res: Response, next: NextFunction): Response | void => {
  if (!err) return next();

  // If it is a validation error, return specific message
  if (typeof err === 'string') {
    return res.status(400).json(ResponseFactory.error(ErrorCodes.VALIDATION_ERROR, err));
  }

  if (err instanceof DefaultException) {
    const httpCode = err.httpCode || 500;
    console.error('Known Error: ', err);
    return res.status(httpCode).json(ResponseFactory.error(err.code, err.messages));
  }

  console.error('Unknown Error: ', err);
  if (err.message && (config.env === 'local' || config.env === 'dev')) {
    return res.status(500).json(ResponseFactory.error(ErrorCodes.UNEXPECTED, err.message));
  }

  return res.status(500).json(ResponseFactory.error(ErrorCodes.UNEXPECTED, 'Ops. One unexpected error just happened. Please report this to us.'));
};
