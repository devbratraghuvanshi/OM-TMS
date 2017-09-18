import { Router, Request, Response, NextFunction } from 'express';
import { UserController } from './../controller/userController';
import { UserModel } from './../model/user';

export class UserRouter{
    router: Router;
    constructor(controller : UserController){
        this.router = Router();
        this.init(controller)
    }

    init(controller : UserController) {
    this.router.route('/')
    .get(controller.get.bind(controller))
    .post(controller.add.bind(controller));

    this.router.route('/:id')
    .get(controller.getById.bind(controller))
    .put(controller.update.bind(controller))
    .patch(controller.patch.bind(controller))
    .delete(controller.delete.bind(controller));
  }

}
export default new UserRouter(new UserController(UserModel)).router;