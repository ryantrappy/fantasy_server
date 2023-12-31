export interface EspnTeam {
  leagueId: string;
  seasonId: number;
  id: number;
  abbreviation: string;
  name: string;
  ownerName: string;
  logoURL: string;
  roster?: RosterEntity[] | null;
  wins: number;
  losses: number;
  ties: number;
  divisionWins: number;
  divisionLosses: number;
  divisionTies: number;
  homeWins: number;
  homeLosses: number;
  homeTies: number;
  awayWins: number;
  awayLosses: number;
  awayTies: number;
  totalPointsScored: number;
  regularSeasonPointsFor: number;
  regularSeasonPointsAgainst: number;
  winningPercentage: number;
  playoffSeed: number;
  finalStandingsPosition: number;
}
export interface RosterEntity {
  seasonId: number;
  scoringPeriodId: number;
  id: number;
  firstName: string;
  fullName: string;
  lastName: string;
  proTeam: string;
  proTeamAbbreviation: string;
  defaultPosition: string;
  eligiblePositions?: string[] | null;
  averageDraftPosition: number;
  auctionValueAverage: number;
  percentChange: number;
  percentStarted: number;
  percentOwned: number;
  availabilityStatus: string;
  isDroppable: boolean;
  isInjured: boolean;
  injuryStatus?: string | null;
  outlooksByWeek?: OutlooksByWeek | null;
}
export interface OutlooksByWeek {
  1: string;
  2: string;
  3: string;
  4?: string | null;
  5?: string | null;
  6?: string | null;
  7?: string | null;
  8?: string | null;
  10?: string | null;
  11?: string | null;
  12?: string | null;
  13?: string | null;
  14?: string | null;
  15?: string | null;
  16?: string | null;
  9?: string | null;
}
