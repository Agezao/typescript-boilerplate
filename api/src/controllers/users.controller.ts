import { Request, Response, NextFunction } from 'express';
import ResponseFactory from '../factories/response.factory';

export default class UsersController {
  public static async get(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      res.json(ResponseFactory.success('cool'));
    } catch (e) {
      next(e);
    }
  }
}