export interface WeeklyRanking {
  _id: string;
  rankingsTitle: string;
  introduction: string;
  leagueId: string;
  week: number;
  year: number;
  teams: [TeamRanking];
}
export interface TeamRanking {
  teamName: string;
  description: string;
  managerName: string;
  wins: number;
  loss: number;
  ties: number;
  delta?: 0;
}
