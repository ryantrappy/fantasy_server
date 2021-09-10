import { NextFunction, Response } from "express";
import HttpException from "../exceptions/HttpException";
import {
  DataStoredInToken,
  RequestWithUser,
} from "../interfaces/auth.interface";
import userModel from "../models/users.model";

import * as jwt from "express-jwt";
import { expressJwtSecret } from "jwks-rsa";
import * as dotenv from "dotenv";

dotenv.config();

const checkJwt = jwt({
  secret: expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ["RS256"],
});

export default checkJwt;

// async function authMiddleware(req: RequestWithUser, res: Response, next: NextFunction) {
//   const cookies = req.cookies;
//
//   if (cookies && cookies.Authorization) {
//     const secret = process.env.JWT_SECRET;
//
//     try {
//       const verificationResponse = jwt.verify(cookies.Authorization, secret) as DataStoredInToken;
//       const userId = verificationResponse._id;
//       const findUser = await userModel.findById(userId);
//
//       if (findUser) {
//         req.user = findUser;
//         res.locals.user = findUser;
//         next();
//       } else {
//         next(new HttpException(401, 'Wrong authentication token'));
//       }
//     } catch (error) {
//       next(new HttpException(401, 'Wrong authentication token'));
//     }
//   } else {
//     next(new HttpException(404, 'Authentication token missing'));
//   }
// }
