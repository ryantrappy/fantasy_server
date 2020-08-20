// @ts-ignore
import { Client } from 'espn-fantasy-football-api/node-dev';
import { NextFunction, Request, Response } from 'express';
import RankingsService from '../services/rankings.service';
import {WeeklyRanking} from '../interfaces/weeklyRanking.interface';
class RankingsController {
	public rankingService = new RankingsService();

  public createNewRanking = async (req: Request, res: Response, next: NextFunction) => {
    try {
	    const weeklyRanking: WeeklyRanking = req.body;

	    const rankingResult: WeeklyRanking = await this.rankingService.createNewRanking(weeklyRanking)

      res.status(200).json(rankingResult );
    } catch (error) {
      next(error);
    }
  }

	public updateRanking = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const rankingId = req.params.id;
			const weeklyRanking: WeeklyRanking = req.body;

			const rankingResult: WeeklyRanking = await this.rankingService.updateRanking(rankingId, weeklyRanking)

			res.status(200).json(rankingResult );
		} catch (error) {
			next(error);
		}
	}

	public getRankingById = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const rankingId = req.params.id;

			const rankingResult: WeeklyRanking = await this.rankingService.getRankingById(rankingId)

			res.status(200).json(rankingResult );
		} catch (error) {
			next(error);
		}
	}

	public getRankingByLeagueId = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const leagueId = req.params.leagueId;

			const rankingResults: WeeklyRanking[] = await this.rankingService.getByLeagueId(leagueId)

			res.status(200).json(rankingResults );
		} catch (error) {
			next(error);
		}
	}
}
export default RankingsController;
