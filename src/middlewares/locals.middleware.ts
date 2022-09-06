import { NextFunction, Response, Request } from "express";
import * as jwt from "jsonwebtoken";
import { DataStoredInToken } from "../interfaces/auth.interface";
import userModel from "../models/users.model";

async function localsMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const cookies = req.headers;
  try {
    if (cookies && cookies.authorization) {
      // const secret = process.env.JWT_SECRET;
      // const authToken = cookies.authorization.split(";")[0];
      //
      // const verificationResponse = jwt.verify(
      //   authToken,
      //   secret
      // ) as DataStoredInToken;
      // const userId = verificationResponse._id;
      // const findUser = await userModel.findById(userId);
      //
      // // if (findUser) {
      // req.user = findUser;
      // res.locals.user = findUser;
      res.locals.swid = process.env.SWID;
      res.locals.espn_s2 = process.env.ESPN_S2;
      // }
    }
    next();
  } catch (e) {
    console.error(e);
    next();
  }
}

export default localsMiddleware;
