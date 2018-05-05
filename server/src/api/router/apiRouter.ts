
import { Router, Request, Response, NextFunction } from 'express';
import { AuthHandler }from './../../auth/passportAuth'

import Api from './../controller/apiController'

import UserRouter  from './userRouter';
import BranchRouter  from './branchRouter';

export class apiRouter {
  router: Router
  /**
   * Initialize the indexRouter
   */
  constructor(private authHandler:any) {
    this.router = Router();
    this.init();
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    var authHandler = this.authHandler;
    this.router.get('/', Api.get);
    this.router.post('/register', Api.register);
    this.router.post('/authenticate', Api.authenticate);
    this.router.get('/status', authHandler, Api.status);
    this.router.post('/logout', Api.logout);
    this.router.use('/user', authHandler, UserRouter);
    this.router.use('/branch', authHandler, BranchRouter);
  }
}
// Create the HeroRouter, and export its configured Express.Router
export default new apiRouter(AuthHandler).router;