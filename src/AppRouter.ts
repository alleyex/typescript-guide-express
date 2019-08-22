import express from 'express';

export class AppRouter {
  private static instance: express.Router;

  static get getInstance(): express.Router {
    if (!AppRouter.instance) {
      AppRouter.instance = express.Router();
    }

    return AppRouter.instance;
  }
}
