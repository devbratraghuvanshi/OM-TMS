
import { Router, Request, Response, NextFunction } from 'express';
import * as Passport from 'passport'

import Api from './../controller/apiController'

import UserRouter  from './userRouter';
import BranchRouter  from './branchRouter';

export class apiRouter {
  router: Router
  /**
   * Initialize the indexRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    var auth = Passport.authenticate('jwt', { session: false });
    this.router.get('/', Api.get);
    this.router.post('/register', Api.register);
    this.router.post('/authenticate', Api.authenticate);
    this.router.get('/status', auth, Api.status);
    this.router.use('/user', auth, UserRouter);
    this.router.use('/branch', auth, BranchRouter);
  }
}
// Create the HeroRouter, and export its configured Express.Router
export default new apiRouter().router;