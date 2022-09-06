import leagueModel from "../models/league.model";
import { League } from "../interfaces/league.interface";
import { isEmptyObject } from "../utils/util";
import HttpException from "../exceptions/HttpException";

class LeaguesService {
  public leagues = leagueModel;
  public async getLeagueById(id: string) {
    const league: League = await this.leagues.findOne({ leagueId: id });
    return league;
  }

  public async createNewLeague(leagueObject: League): Promise<League> {
    if (isEmptyObject(leagueObject))
      throw new HttpException(400, "LeagueObject empty");
    return await this.leagues.create(leagueObject);
  }
}
export default LeaguesService;
