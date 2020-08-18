import { Router } from 'express';
import LeaguesController from '../controllers/leagues.controller';
import Route from '../interfaces/routes.interface';
import validationMiddleware from '../middlewares/validation.middleware';

class LeaguesRoute implements Route {
  public path = '/leagues';
  public router = Router();
  public leaguesController = new LeaguesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // this.router.get(`${this.path}`, this.usersController.getUsers);
    this.router.get(`${this.path}/:id`, this.leaguesController.getClient);
    // this.router.post(`${this.path}`, this.usersController.createUser);
    // this.router.put(`${this.path}/:id`, validationMiddleware(CreateUserDto, true), this.usersController.updateUser);
    // this.router.delete(`${this.path}/:id`, this.usersController.deleteUser);
  }
}

export default LeaguesRoute;
