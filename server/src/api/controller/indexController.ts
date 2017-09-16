import { Router, Request, Response, NextFunction } from 'express';

export class IndexController {

    public get(req: Request, res: Response, next: NextFunction) {
       res.json({
        message: 'You are at the root level of server API'
      });
    }
}


export default new IndexController();