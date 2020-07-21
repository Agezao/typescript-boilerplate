import express from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';
import config from './infrastructure/config';
import errorMiddleware from './middlewares/error.middleware';

export default class App {
  public app: express.Application;
  public port: number;

  constructor({ port = config.port }: { port?: number; }) {
    this.app = express();
    this.port = port;

    this.assingPreRequestsMiddleWares();
  }

  private assingPreRequestsMiddleWares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(bodyparser.json());
    this.app.use(bodyparser.urlencoded({ extended: true }));
    this.app.disable('etag');
  }

  private assingPostRequestsMiddlewares() {
    this.app.use(errorMiddleware);
  }

  public listen(): void {
    this.assingPostRequestsMiddlewares();

    this.app.listen(this.port, () => {
      console.log(`Server started at port :${this.port}`);
    });
  }
};
