import axios from "axios";
import {
  SleeperLeague,
  SleeperLeagueUser,
  SleeperUserMetadata,
  SleeperUserRoster,
} from "../interfaces/sleeperTypes.interface";
class SleeperService {
  public async getLeagueMatchups(leagueId: string, week: number) {
    const { data } = await axios.get(
      `https://api.sleeper.app/v1/league/${leagueId}/matchups/${week}`
    );
    return data;
  }
  public async getLeagueById(leagueId: string): Promise<SleeperLeague> {
    const { data } = await axios.get(
      `https://api.sleeper.app/v1/league/${leagueId}`
    );
    return data;
  }
  public async getLeaguesForUser(userId: string, year: number) {
    const { data } = await axios.get(
      `https://api.sleeper.app/v1/user/${userId}/leagues/nfl/${year}`
    );
    return data;
  }
  public async getAllUsersInLeague(
    leagueId: string
  ): Promise<SleeperLeagueUser[]> {
    const { data } = await axios.get(
      `https://api.sleeper.app/v1/league/${leagueId}/users`
    );
    return data;
  }
  public async getTransactionsForLeague(
    leagueId: string,
    round?: number
  ): Promise<any[]> {
    const { data } = await axios.get(
      `https://api.sleeper.app/v1/league/${leagueId}/transactions/${round}`
    );
    return data;
  }
  public async getSeasonsStatsForPlayer(
    playerId: string,
    seasonId: number
  ): Promise<any> {
    const { data } = await axios.get(
      `https://api.sleeper.com/stats/nfl/player/${playerId}?season_type=regular&season=${seasonId}&grouping=week`
    );
    return data;
  }
  public async getAllRostersInLeague(
    leagueId: string
  ): Promise<SleeperUserRoster[]> {
    const { data } = await axios.get(
      `https://api.sleeper.app/v1/league/${leagueId}/rosters`
    );
    return data;
  }
  public async getUserById(userId: string) {
    const { data } = await axios.get(
      `https://api.sleeper.app/v1/user/${userId}`
    );
    return data;
  }
  public async getUserByUsername(username: string) {
    const { data } = await axios.get(
      `https://api.sleeper.app/v1/user/${username}`
    );
    return data;
  }
}
export default SleeperService;
