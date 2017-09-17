import { Router, Request, Response, NextFunction } from 'express';
import * as utility from "./../../utility/utility"
import { UserModel } from './../model/user';
import UserCredential from './../model/userCredential';

export class ApiController {

  public get(req: Request, res: Response, next: NextFunction) {
    res.json({
      message: 'You are at the root level of server API'
    });
  }

  public register(req: Request, res: Response, next: NextFunction) {

    if (!req.body.userId || !req.body.password) {
      res.json({ success: false, msg: 'Please pass user ID and password.' });
    } else {

      // register user => save Id and Password
      var newUserCredential = new UserCredential({
        userId: req.body.userId,
        password: req.body.password,
      });

      var newUser = new UserModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userId: req.body.userId,
        email: req.body.email,
        mobile: req.body.mobile,
      });

      newUserCredential.save().then(() => {
        // save the user in user table
        return newUser.save();
      }).then(() => {
        res.json({ success: true, msg: 'Successfully created new user.' });
      }, (err) => {
        return res.json({ success: false, msg: 'Username already exists.' });
      });

    }
  }

  public authenticate(req: Request, res: Response, next: NextFunction) {

    if (!req.body.userId || !req.body.password) {
      res.json({ success: false, msg: 'Please pass user ID and password.' });
    } else {
      UserCredential.findOne({
        userId: req.body.userId
      }, function (err, userCredential) {
        if (err) throw err;
        if (!userCredential) {
          res.send({ success: false, msg: 'Authentication failed. User not found.' });
        } else {
          // check if password matches
          userCredential.comparePassword(req.body.password, function (err, isMatch) {
            if (isMatch && !err) {
              // if user is found and password is right create a token
              var token = utility.jwtEncode(userCredential);
              // return the information including token as JSON
              res.json({ success: true, token: 'JWT ' + token });
            } else {
              res.send({ success: false, msg: 'Authentication failed. Wrong password.' });
            }
          });
        }
      });
    }
  }

}

export default new ApiController();