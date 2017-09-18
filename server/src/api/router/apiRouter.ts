
import {Router, Request, Response, NextFunction} from 'express';
import * as Passport from 'passport'

import Api from './../controller/apiController'

import  UserRouter  from './userRouter';

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
    var auth = Passport.authenticate('jwt', { session: false});
    this.router.get('/', Api.get);
    this.router.post('/register',Api.register);
    this.router.post('/authenticate',Api.authenticate);
    this.router.use('/user',auth, UserRouter);
  }
}
// Create the HeroRouter, and export its configured Express.Router
export default new apiRouter().router;