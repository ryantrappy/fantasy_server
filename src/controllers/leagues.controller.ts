import { NextFunction, Request, Response } from "express";
import { getClient } from "../utils/util";
import LeaguesService from "../services/leagues.service";
import SleeperLeaguesController from "./sleeper/sleeperLeagues.controller";
import SleeperRankingsController from "./sleeper/sleeperRankings.controller";
import { WeeklyRanking } from "../interfaces/weeklyRanking.interface";
import { League } from "../interfaces/league.interface";

class LeaguesController {
  private leagueService = new LeaguesService();
  private sleeperLeaguesController = new SleeperLeaguesController();

  public createNewLeague = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const leagueObject: League = req.body;

      const result = await this.leagueService.createNewLeague(leagueObject);

      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  };

  // TODO add sleeper to this endpoint
  public getClient = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const leagueId = req.params.leagueId;
      const client = getClient(leagueId, res);
      const seasonId = 2022;
      const scoringPeriodId = 1;
      const result = await client.getFreeAgents({ seasonId, scoringPeriodId });
      res.status(200).json({ data: result, message: "findAll" });
    } catch (error) {
      console.error(error);
      next(error);
    }
  };
  // TODO add sleeper to this endpoint
  public getLeagueInfoForSeason = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const leagueId = req.params.leagueId;
      const seasonId = req.params.seasonId;

      const { leagueType, leagueName } = await this.leagueService.getLeagueById(
        leagueId
      );
      res.locals.leagueType = leagueType;
      res.locals.leagueName = leagueName;

      if (leagueType === 0) {
        return this.sleeperLeaguesController.getLeagueInfoForSeason(
          req,
          res,
          next
        );
      }

      const client = getClient(leagueId, res);
      const result = await client.getLeagueInfo({ seasonId });
      res.status(200).json({ data: result });
    } catch (error) {
      console.error(error);
      next(error);
    }
  };
  public getTeamsForWeek = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const leagueId = req.params.leagueId;
      const seasonId = req.params.seasonId;
      const scoringPeriodId = req.params.scoringPeriodId;
      const leagueObject = await this.leagueService.getLeagueById(leagueId);
      if (leagueObject === null) {
        res.status(400).json({ error: "League does not exist" });
        next();
      }
      const { leagueType, leagueName } = leagueObject;
      res.locals.leagueType = leagueType;
      res.locals.leagueName = leagueName;

      if (leagueType === 0) {
        return this.sleeperLeaguesController.getTeamsForWeek(req, res, next);
      }
      const client = getClient(leagueId, res);
      const result = await client.getTeamsAtWeek({
        seasonId,
        scoringPeriodId,
      });
      res.status(200).json({ data: result });
    } catch (error) {
      console.error(error);
      next(error);
    }
  };
  public getBoxScoresForWeek = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const leagueId = req.params.leagueId;
      const seasonId = req.params.seasonId;
      const scoringPeriodId = req.params.scoringPeriodId;

      const leagueObject = await this.leagueService.getLeagueById(leagueId);
      if (leagueObject === null) {
        res.status(400).json({ error: "League does not exist" });
        next();
      }
      const { leagueType, leagueName } = leagueObject;
      res.locals.leagueType = leagueType;
      res.locals.leagueName = leagueName;

      if (leagueType === 0) {
        return this.sleeperLeaguesController.getBoxScoresForWeek(
          req,
          res,
          next
        );
      }
      const client = getClient(leagueId, res);
      const matchupPeriodId = scoringPeriodId;
      const result = await client.getBoxscoreForWeek({
        seasonId,
        matchupPeriodId,
        scoringPeriodId,
      });
      res.status(200).json({ data: result });
    } catch (error) {
      console.error(error);
      next(error);
    }
  };
}
export default LeaguesController;
