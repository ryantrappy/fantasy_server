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
}
export default RankingsService;
