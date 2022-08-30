import { NextFunction, Request, Response } from "express";
import { Team } from "../../interfaces/teams.interface";
import SleeperService from "../../services/sleeper.service";
class SleeperLeaguesController {
  private sleeperService = new SleeperService();

  public getLeagueInfoForSeason = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const leagueId = req.params.leagueId;
      const leagueData = await this.sleeperService.getLeagueById(leagueId);
      const result = {
        leagueId: leagueData.league_id,
        leagueName: leagueData.name,
        leagueType: 1,
      };
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  };
  public getTeamsForWeek = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const leagueId = req.params.leagueId;
      const seasonId = req.params.seasonId;
      const scoringPeriodId = req.params.scoringPeriodId;
      const rosters = await this.sleeperService.getAllRostersInLeague(leagueId);
      const users = await this.sleeperService.getAllUsersInLeague(leagueId);
      const result = [];
      for (const roster of rosters) {
        const user = users.find(
          (curUser) => curUser.user_id === roster.owner_id
        );
        const team: Team = {
          leagueId,
          seasonId: `${new Date().getUTCFullYear()}`, // Year isn't possible for sleeper
          abbreviation: user.metadata.team_name,
          name: user.metadata.team_name,
          firstName: user.display_name,
          lastName: user.display_name,
          roster: [],
          wins: roster.settings.wins,
          losses: roster.settings.losses,
          ties: roster.settings.ties,
        };
        result.push(team);
      }

      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  };
  // TODO this endpoint doesn't work for espn right now need to fix
  public getBoxScoresForWeek = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const leagueId = req.params.leagueId;
      const scoringPeriodId = req.params.scoringPeriodId;
      const result: any[] = [];

      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  };
}
export default SleeperLeaguesController;
