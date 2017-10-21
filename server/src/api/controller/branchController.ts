import { Request, Response } from 'express';
import { Model } from 'mongoose';
import { IBranchModel } from './../model/Branch';
export class BranchController {

    BranchModel:Model<IBranchModel>;
    
    constructor(model :Model<IBranchModel>){
        this.BranchModel = model;
    }

    public add(req: Request, res: Response) {
        console.log(req.body);
        let newBranch = new this.BranchModel(req.body);
        console.log(newBranch);
        newBranch.save().then((Branch) => {
            res.status(200);
            res.send(Branch);
        }).catch((err) => {
            res.status(500);
            res.send({ message: "internal server error", status: false, err: err });
        });
    }

    public get(req: Request, res: Response) {
        this.BranchModel.find((err, Branchs) => {
            if (err) {
                res.status(500);
                res.send({ message: "internal server error", status: false, err: err });
            } else {
                res.status(200);
                res.send(Branchs);
            }
        })
    }

    public getById(req: Request, res: Response) {
        this.BranchModel.findById(req.params.id, (err, Branchs) => {
            if (err) {
                res.status(500);
                res.send({ message: "internal server error", status: false, err: err });
            } else {
                res.status(200);
                res.send(Branchs);
            }
        })
    }

    public update(req: Request, res: Response) {
        this.BranchModel.findById(req.params.id).then((Branch) => {
            Branch.Name = req.body.Name;
            Branch.Code = req.body.Code;
            Branch.Type = req.body.Type;
            Branch.IsAgency = req.body.IsAgency;
            Branch.Email = req.body.Email;
            Branch.ContactPerson = req.body.ContactPerson;
            Branch.Address = req.body.Address;
            Branch.State = req.body.State;
            Branch.District = req.body.District;
            Branch.PIN = req.body.PIN;
            Branch.Telephone = req.body.Telephone;
            Branch.Mobile = req.body.Mobile;
            return Branch.save();
        }).then((Branch) => {
            res.status(200);
            res.send(Branch);
        }).catch((err) => {
            res.status(500);
            res.send({ message: "internal server error", status: false, err: err });
        });
    }

    public patch(req: Request, res: Response) {
        this.BranchModel.findById(req.params.id).then((Branch) => {
            for (var key in req.body) {
                Branch[key] = req.body[key];
            }
            return Branch.save();
        }).then((Branch) => {
            res.status(200);
            res.send(Branch);
        }).catch((err) => {
            res.status(500);
            res.send({ message: "internal server error", status: false, err: err });
        });
    }

    public delete(req: Request, res: Response) {
        this.BranchModel.findById(req.params.id).then((Branch) => {
            if (Branch) {
                return Branch.remove();
            } else {
                return Promise.resolve(null) as Promise<any>;
            }
        }).then((removed) => {
            res.status(200);
            if (!removed) {
                res.send({ message: 'resource not found with given ID', status: false });
            } else {
                res.send({ message: "resource deleted successfully", status: true, data: removed });
            }
        }).catch((err) => {
            res.status(500);
            res.send({ message: "internal server error", status: false, err: err });
        });
    }
}