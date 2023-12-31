export interface TransactionScore {
  playerId: string;
  startWeek: number;
  endWeek: number;
  points?: number;
  isOpen: boolean;
}
export interface UserTransactions {
  userId: string;
  transactions: TransactionScore[];
  userName: string;
}

export interface LeagueTransactions {
  [key: string]: UserTransactions;
}
