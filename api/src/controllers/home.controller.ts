import { Request, Response, NextFunction } from 'express';
import ResponseFactory from '../factories/response.factory';

export default class HomeController {
  public static async get(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      res.json(ResponseFactory.success('This is a graphql API, check /graphql for more info'));
    } catch (e) {
      next(e);
    }
  }
}