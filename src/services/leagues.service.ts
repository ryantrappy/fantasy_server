import leagueModel from "../models/league.model";
import { League } from "../interfaces/league.interface";

class LeaguesService {
  public leagues = leagueModel;
  public async getLeagueById(id: string) {
    const league: League = await this.leagues.findById(id);
    return league;
  }
}
export default LeaguesService;
