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
      const secret = process.env.JWT_SECRET;
      const authToken = cookies.authorization.split(";")[0];

      const verificationResponse = jwt.verify(
        authToken,
        secret
      ) as DataStoredInToken;
      const userId = verificationResponse._id;
      const findUser = await userModel.findById(userId);

      if (findUser) {
        // req.user = findUser;
        res.locals.user = findUser;
        res.locals.swid = "{D0A94500-4731-492D-8B35-B42F934ED91B}";
        res.locals.espn_s2 =
          "AEAQsxgRO8lDwsC%2FFWx9dT3gsVtOQ%2B4i0RukWTZ7yLPs57xgBlLrmOzxtEKwnLExXay4vXzZNKpkolCIbKzfHG9dXcltAW%2F2raA4Bjhhsyi90%2F9X7MUatSENQqUrZebz3C1okfFL1LzcuX3PLm0SFGRkNMaY1cWqnVjsGnZujw2qxbNoHLiSAigVy%2BmJOI%2FSOLnuOUwtrvkmi37LaXAuoSPhO2Nk2mb9pUXdxm7AYbnSQq3sT1Dqu1xkh3qaK6x8ttzw4BisOjP0Hk3bxETp4lst";
      }
    }
    next();
  } catch (e) {
    console.error(e);
    next();
  }
}

export default localsMiddleware;
