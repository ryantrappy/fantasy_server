import { Router } from 'express';
import RankingsController from '../controllers/rankings.controller';
import Route from '../interfaces/routes.interface';
import validationMiddleware from '../middlewares/validation.middleware';
import {CreateRankingDto} from '../dtos/ranking.dto';

class RankingsRoute implements Route {
  public path = '/rankings';
  public router = Router();
  public rankingsController = new RankingsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, validationMiddleware(CreateRankingDto), this.rankingsController.createNewRanking);
	  this.router.put(`${this.path}/:id`, validationMiddleware(CreateRankingDto), this.rankingsController.updateRanking);
	  this.router.get(`${this.path}/:id`, this.rankingsController.getRankingById);
	  this.router.get(`${this.path}/leagues/:leagueId`, this.rankingsController.getRankingByLeagueId);

  }
}

export default RankingsRoute;
