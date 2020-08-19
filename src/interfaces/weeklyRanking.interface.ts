export interface WeeklyRanking {
  _id: string;
	rankingsTitle: string;
	introduction: string;
	teams: [TeamRanking]
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
