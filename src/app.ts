import * as cookieParser from "cookie-parser";
import * as cors from "cors";
import * as express from "express";
import * as helmet from "helmet";
import * as nocache from "nocache";
import * as hpp from "hpp";
import * as mongoose from "mongoose";
import * as logger from "morgan";
import { expressjwt } from "express-jwt";
import * as jwks from "jwks-rsa";
import Routes from "./interfaces/routes.interface";
import errorMiddleware from "./middlewares/error.middleware";
import localsMiddleware from "./middlewares/locals.middleware";
import { auth } from "express-oauth2-jwt-bearer";

class App {
  public app: express.Application;
  public port: string | number;
  public env: boolean;

  constructor(routes: Routes[]) {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.env = process.env.NODE_ENV === "production";

    this.connectToDatabase();
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeErrorHandling();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`🚀 App listening on the port ${this.port}`);
    });
  }

  public getServer() {
    return this.app;
  }
  private initializeMiddlewares() {
    const checkJwt = auth({
      audience: "https://dev-voqmvc1s.us.auth0.com/api/v2/",
      issuerBaseURL: `https://dev-voqmvc1s.us.auth0.com/`,
    });
    if (this.env) {
      this.app.use(hpp());
      this.app.use(helmet());
      this.app.use(logger("combined"));
      this.app.use(cors({ origin: "*", credentials: true }));
    } else {
      this.app.use(logger("dev"));
      this.app.use(cors({ origin: "*", credentials: true }));

      // this.app.use(cors({ origin: true, credentials: true }));
    }
    this.app.use(checkJwt);
    this.app.disable("etag");
    this.app.use(nocache());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
    this.app.use(localsMiddleware);
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use("/", route.router);
    });
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }

  private connectToDatabase() {
    const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH, MONGO_DATABASE } =
      process.env;
    const options = {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    };

    mongoose.connect(`mongodb://${MONGO_PATH}/${MONGO_DATABASE}`, {
      ...options,
    });
    // mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}/${MONGO_DATABASE}?authSource=admin`, { ...options });
  }
}

export default App;
