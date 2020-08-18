import 'dotenv/config';
import App from './app';
import IndexRoute from './routes/index.route';
import UsersRoute from './routes/users.route';
import AuthRoute from './routes/auth.route';
import LeaguesRoutes from './routes/leagues.route';
import validateEnv from './utils/validateEnv';

validateEnv();

const app = new App([
  new IndexRoute(),
  new UsersRoute(),
  new LeaguesRoutes(),
  new AuthRoute(),
]);

app.listen();
