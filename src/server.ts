import "dotenv/config";
import App from "./app";
import IndexRoute from "./routes/index.route";
import RankingsRoute from "./routes/rankings.route";
import LeaguesRoutes from "./routes/leagues.route";
import validateEnv from "./utils/validateEnv";

validateEnv();

const app = new App([
  new IndexRoute(),
  new LeaguesRoutes(),
  new RankingsRoute(),
]);

app.listen();
