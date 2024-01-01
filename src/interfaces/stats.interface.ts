export interface TransactionScore {
  playerId?: string;
  id?: number;
  startWeek: number;
  endWeek: number;
  points?: number;
  isOpen: boolean;
  playerName?: string;
}
export interface UserTransactions {
  userId?: string;
  id?: number;
  transactions: TransactionScore[];
  userName: string;
}

export interface LeagueTransactions {
  [key: string]: UserTransactions;
}

export interface espnTransaction {
  bidAmount: number;
  isPending: boolean;
  proposedDate: number;
  scoringPeriodId: number;
  status: string;
  teamId: number;
  type: string;
  items?: ItemsEntity[] | null;
}
export interface ItemsEntity {
  fromLineupSlotId: number;
  fromTeamId: number;
  isKeeper: boolean;
  playerId: number;
  toTeamId: number;
  type: string;
}
