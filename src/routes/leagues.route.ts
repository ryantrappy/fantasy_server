import { Router } from "express";
import LeaguesController from "../controllers/leagues.controller";
import Route from "../interfaces/routes.interface";
import validationMiddleware from "../middlewares/validation.middleware";

class LeaguesRoute implements Route {
  public path = "/leagues";
  public router = Router();
  public leaguesController = new LeaguesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/:id`, this.leaguesController.getClient);
    this.router.post(`${this.path}`, this.leaguesController.createNewLeague);
    this.router.get(
      `${this.path}/:leagueId/seasons/:seasonId`,
      this.leaguesController.getLeagueInfoForSeason
    );
    this.router.get(
      `${this.path}/:leagueId/seasons/:seasonId/weeks/:scoringPeriodId`,
      this.leaguesController.getBoxScoresForWeek
    );
    this.router.get(
      `${this.path}/:leagueId/seasons/:seasonId/weeks/:scoringPeriodId/teams`,
      this.leaguesController.getTeamsForWeek
    );
  }
}

export default LeaguesRoute;
