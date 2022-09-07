import { NextFunction, Response, Request } from "express";

async function localsMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const cookies = req.headers;
  try {
    if (cookies && cookies.authorization) {
      res.locals.swid = process.env.SWID;
      res.locals.espn_s2 = process.env.ESPN_S2;
    }
    next();
  } catch (e) {
    console.error(e);
    next();
  }
}

export default localsMiddleware;
