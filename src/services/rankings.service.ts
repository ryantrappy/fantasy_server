import {WeeklyRanking} from '../interfaces/weeklyRanking.interface';
import {isEmptyObject} from '../utils/util';
import HttpException from '../exceptions/HttpException';
import weeklyRankingModel from '../models/weeklyRanking.model';

class RankingsService {
	public weeklyRankings = weeklyRankingModel;
    public async createNewRanking(rankingObject: WeeklyRanking): Promise<WeeklyRanking> {
	    if (isEmptyObject(rankingObject)) throw new HttpException(400, "RankingObject empty");

	    return await this.weeklyRankings.create(rankingObject);
    }

	public async updateRanking(rankingId: string, rankingObject: WeeklyRanking): Promise<WeeklyRanking> {
		if (isEmptyObject(rankingObject)) throw new HttpException(400, "RankingObject empty");

		return this.weeklyRankings.findByIdAndUpdate(rankingId, rankingObject);
	}

	public async getRankingById(rankingId: string): Promise<WeeklyRanking> {
		 const rankingResult: WeeklyRanking = await this.weeklyRankings.findById(rankingId);

		if (isEmptyObject(rankingResult)) throw new HttpException(400, "RankingId did not exist");
		return rankingResult;
	}

	public async getByLeagueId(leagueId: string): Promise<WeeklyRanking[]> {
    	const query = {
    		leagueId
	    }
		const rankingResults: WeeklyRanking[] = await this.weeklyRankings.find(query);

		if (isEmptyObject(rankingResults)) throw new HttpException(400, "RankingId did not exist");
		return rankingResults;
	}
}
export default RankingsService;
