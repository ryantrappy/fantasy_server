// @ts-ignore
import { Client } from 'espn-fantasy-football-api/node-dev';
import { NextFunction, Request, Response } from 'express';
class LeaguesController {
  public getClient = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const client = new Client({ leagueId: 18070232 });
      const seasonId = 2019;
      const scoringPeriodId = 16;
      const result = await client.getFreeAgents({ seasonId, scoringPeriodId });
      res.status(200).json({ data: result, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  }

  public getLeagueInfoForSeason = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const client = new Client({ leagueId: 18070232 });
      const seasonId = 2019;
      const result = await client.getLeagueInfo({ seasonId });
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }
  public getTeamsForWeek = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const client = new Client({ leagueId: 18070232 });
      const seasonId = 2019;
      const scoringPeriodId = 16;
      const result = await client.getTeamsAtWeek({ seasonId, scoringPeriodId });
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }
  public getBoxScoresForWeek = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const client = new Client({ leagueId: 18070232 });
      const seasonId = 2019;
      const scoringPeriodId = 1;
      const matchupPeriodId = 1;
      const result = await client.getBoxscoreForWeek({ seasonId, matchupPeriodId, scoringPeriodId });
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }
}
export default LeaguesController;
