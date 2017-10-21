import { Router, Request, Response, NextFunction } from 'express';
import { BranchController } from './../controller/BranchController';
import { BranchModel } from './../model/Branch';

export class BranchRouter{
    router: Router;
    constructor(controller : BranchController){
        this.router = Router();
        this.init(controller)
    }

    init(controller : BranchController) {
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
export default new BranchRouter(new BranchController(BranchModel)).router;