import { NextFunction, Request, Response } from 'express';
import {getClient} from '../utils/util';
class LeaguesController {
  public getClient = async (req: Request, res: Response, next: NextFunction) => {
    try {
     const leagueId = req.params.leagueId;
	   const client = getClient(leagueId, res);
     const seasonId = 2019;
     const scoringPeriodId = 16;
     const result = await client.getFreeAgents({ seasonId, scoringPeriodId });
     res.status(200).json({ data: result, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getLeagueInfoForSeason = async (req: Request, res: Response, next: NextFunction) => {
    try {
    	const leagueId = req.params.leagueId;
	    const seasonId = req.params.seasonId;
      const client = getClient(leagueId, res);
     const result = await client.getLeagueInfo({ seasonId });
     res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  };
  public getTeamsForWeek = async (req: Request, res: Response, next: NextFunction) => {
    try {
	    const leagueId = req.params.leagueId;
	    const seasonId = req.params.seasonId;
	    const scoringPeriodId = req.params.scoringPeriodId;
      const client = getClient(leagueId, res);
     const result = await client.getTeamsAtWeek({ seasonId, scoringPeriodId });
     res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  };
  public getBoxScoresForWeek = async (req: Request, res: Response, next: NextFunction) => {
    try {
	    const leagueId = req.params.leagueId;
	    const seasonId = req.params.seasonId;
	    const scoringPeriodId = req.params.scoringPeriodId;
      const client = getClient(leagueId, res);
     const matchupPeriodId = scoringPeriodId;
     const result = await client.getBoxscoreForWeek({ seasonId, matchupPeriodId, scoringPeriodId });
     res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }
}
export default LeaguesController;
