
import {Router, Request, Response, NextFunction} from 'express';
import * as Passport from 'passport'

import IndexController from './../controller/IndexController'
import SignUpController  from './../controller/signupController';


import  UserRouter  from './userRouter';
//import  ImageRouter  from './imageRouter';

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
    this.router.get('/', IndexController.get);
    this.router.post('/signup',new SignUpController().signUpUser);
    this.router.post('/authenticate',new SignUpController().authenticate);
    this.router.use('/api/v1/user',auth, UserRouter);
    //this.router.use('/api/v1/image', ImageRouter);
  }
}
// Create the HeroRouter, and export its configured Express.Router
export default new apiRouter().router;