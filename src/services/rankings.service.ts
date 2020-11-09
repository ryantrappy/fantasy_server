import {WeeklyRanking} from '../interfaces/weeklyRanking.interface';
import {isEmptyObject} from '../utils/util';
import HttpException from '../exceptions/HttpException';
import weeklyRankingModel from '../models/weeklyRanking.model';

class RankingsService {
	public weeklyRankings = weeklyRankingModel;
    public async createNewRanking(rankingObject: WeeklyRanking): Promise<WeeklyRanking> {
	    if (isEmptyObject(rankingObject)) throw new HttpException(400, "RankingObject empty");

	    const current: WeeklyRanking[] = await this.getByLeagueAndTime(rankingObject.leagueId, rankingObject.week, rankingObject.year);
			if(!isEmptyObject(current)) throw new HttpException(400, "RankingObject already exists");

	    return await this.weeklyRankings.create(rankingObject);
    }

	public async updateRanking(rankingId: string, rankingObject: WeeklyRanking): Promise<WeeklyRanking> {
    if (isEmptyObject(rankingObject)) throw new HttpException(400, "RankingObject empty");

    return this.weeklyRankings.findByIdAndUpdate(rankingId, rankingObject);
  }

  public async updateRankingByWeek(leagueId: string, week: number, year: number,
                                   rankingObject: WeeklyRanking): Promise<WeeklyRanking> {
    if (isEmptyObject(rankingObject)) throw new HttpException(400, "RankingObject empty");

    const query = {
      leagueId, week, year
    };

    return this.weeklyRankings.findOneAndUpdate(query, rankingObject);
  }

	public async getRankingById(rankingId: string): Promise<WeeklyRanking> {
		 const rankingResult: WeeklyRanking = await this.weeklyRankings.findById(rankingId);

		if (isEmptyObject(rankingResult)) throw new HttpException(400, "RankingId did not exist");
		return rankingResult;
	}

	public async getByLeagueId(leagueId: string): Promise<WeeklyRanking[]> {
    	const query = {
    		leagueId
	    };
		const rankingResults: WeeklyRanking[] = await this.weeklyRankings.find(query).sort({ year: 1, week: 1});

		if (isEmptyObject(rankingResults)) return [];
		return rankingResults;
	}

	public async getByLeagueAndTime(leagueId: string, week: number, year: number): Promise<WeeklyRanking[]> {
		const query = {
			leagueId,
			week,
			year
		}
		return this.weeklyRankings.find(query);
	}
}
export default RankingsService;
