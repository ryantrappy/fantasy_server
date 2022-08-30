export interface Team {
  leagueId: string;
  seasonId: string; // Season year
  abbreviation: string;
  name: string;
  firstName: string;
  lastName: string;
  roster: [];
  wins: number;
  losses: number;
  ties: number;
}