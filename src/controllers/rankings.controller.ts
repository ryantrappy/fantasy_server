// @ts-ignore
import { Client } from 'espn-fantasy-football-api/node-dev';
import { NextFunction, Request, Response } from 'express';
import RankingsService from '../services/rankings.service';
import {WeeklyRanking} from '../interfaces/weeklyRanking.interface';
class RankingsController {
	public rankingService = new RankingsService();

  public createNewRanking = async (req: Request, res: Response, next: NextFunction) => {
    try {
	    const leagueId = req.params.leagueId;
	    const client = new Client({ "leagueId": leagueId });
      const seasonId = 2019;
      const scoringPeriodId = 16;
	    const weeklyRanking: WeeklyRanking = req.body;

	    const rankingResult: WeeklyRanking = await this.rankingService.createNewRanking(weeklyRanking)

      res.status(200).json(rankingResult );
    } catch (error) {
      next(error);
    }
  }
}
export default RankingsController;
