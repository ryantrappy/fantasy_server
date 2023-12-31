import SleeperService from "../src/services/sleeper.service";
import {
  LeagueTransactions,
  TransactionScore,
  UserTransactions,
} from "../src/interfaces/stats.interface";

const sleeperLeagueId = "992148648555274240";
const playerCache: any = {};

const sleeperService = new SleeperService();

const getSleeperData = async () => {
  const sleeperLeagueObject = await sleeperService.getLeagueById(
    sleeperLeagueId
  );
  const matchUpData = await sleeperService.getLeagueMatchups(
    sleeperLeagueId,
    1
  );
  const usersData = await sleeperService.getAllUsersInLeague(sleeperLeagueId);
  console.log(JSON.stringify(usersData));
  const transactions = await sleeperService.getTransactionsForLeague(
    sleeperLeagueId,
    10
  );
  console.log("got by id");
  console.log(JSON.stringify(sleeperLeagueObject));
};

const getPlayerDataSinceDate = async (
  playerId: string,
  startWeek: number,
  endWeek: number
) => {
  // const playerId = "8143";
  // const startWeek = 11;
  // const endWeek = 14;
  let totalPoints = 0;
  let playerStatsByWeek;
  if (playerCache[playerId] === undefined) {
    playerStatsByWeek = await sleeperService.getSeasonsStatsForPlayer(
      playerId,
      2023
    );
  } else {
    playerStatsByWeek = playerCache[playerId];
  }

  for (let i: number = startWeek; i <= endWeek; i++) {
    if (
      playerStatsByWeek[i] &&
      playerStatsByWeek[i].stats.pts_half_ppr != undefined
    ) {
      totalPoints = totalPoints + playerStatsByWeek[i].stats.pts_half_ppr;
    }
  }
  return totalPoints;
};

const getPointsForUserTransactions = async (
  userTransactions: UserTransactions
) => {
  for (const transaction of userTransactions.transactions) {
    transaction.points = await getPlayerDataSinceDate(
      transaction.playerId,
      transaction.startWeek,
      transaction.endWeek
    );
  }
};

const createTransactionsByUser = async () => {
  const transactionDataByUser: LeagueTransactions = {};
  const outputObject: any = {};

  const usersData = await sleeperService.getAllUsersInLeague(sleeperLeagueId);
  for (const user of usersData) {
    transactionDataByUser[user.user_id] = {
      userId: user.user_id,
      userName: user.display_name,
      transactions: [],
    };
  }
  for (let i = 1; i < 15; i++) {
    let transactions = await sleeperService.getTransactionsForLeague(
      sleeperLeagueId,
      i
    );
    transactions = transactions.filter((value) => {
      return value.type !== "trade" && value.status === "complete";
    });

    for (const transaction of transactions) {
      if (transaction.adds) {
        const formattedTransaction: TransactionScore = {
          playerId: Object.keys(transaction.adds)[0],
          startWeek: i,
          endWeek: 14,
          isOpen: true,
        };
        transactionDataByUser[transaction.creator].transactions.push(
          formattedTransaction
        );
      }
      if (transaction.drops) {
        const dropId = Object.keys(transaction.drops)[0];

        const dropped = transactionDataByUser[
          transaction.creator
        ].transactions.filter((cur) => {
          return cur.playerId === dropId;
        });
        for (const drop of dropped) {
          if (drop.isOpen) {
            drop.isOpen = false;
            drop.endWeek = i;
          }
        }
      }
    }

    for (const user of usersData) {
      const userTransactions = transactionDataByUser[user.user_id];
      await getPointsForUserTransactions(userTransactions);
      let userScore = 0;

      for (const transaction of userTransactions.transactions) {
        userScore = userScore + transaction.points;
      }
      outputObject[user.display_name] = {
        totalPoints: userScore,
        pointsPerTrans: userScore / userTransactions.transactions.length,
      };
    }
  }

  // for (const user of usersData) {
  //   await getPointsForUserTransactions(transactionDataByUser[user.user_id]);
  // }

  console.log(JSON.stringify(transactionDataByUser));
  console.log(JSON.stringify(outputObject));
};

const getSecondHalfRecords = async () => {
  const secondHalfDataByUser: any = {};
  const usersData = await sleeperService.getAllUsersInLeague(sleeperLeagueId);
  const rostersData = await sleeperService.getAllRostersInLeague(
    sleeperLeagueId
  );

  for (const user of usersData) {
    const rosterId = rostersData.find((val) => {
      return val.owner_id === user.user_id;
    }).roster_id;
    secondHalfDataByUser[rosterId] = {
      userId: user.user_id,
      userName: user.display_name,
      wins: 0,
      losses: 0,
      points: 0,
    };
  }
  for (let i = 7; i < 15; i++) {
    const leagueMatchUp = await sleeperService.getLeagueMatchups(
      sleeperLeagueId,
      i
    );
    for (const matchUp of leagueMatchUp) {
      const opponent = leagueMatchUp.find((otherVal) => {
        return (
          otherVal.matchup_id === matchUp.matchup_id &&
          otherVal.roster_id != matchUp.roster_id
        );
      });
      secondHalfDataByUser[matchUp.roster_id].points =
        secondHalfDataByUser[matchUp.roster_id].points + matchUp.points;
      if (matchUp.points > opponent.points) {
        secondHalfDataByUser[matchUp.roster_id].wins++;
      } else {
        secondHalfDataByUser[matchUp.roster_id].losses++;
      }
    }
  }
  console.log(JSON.stringify(secondHalfDataByUser));
};

createTransactionsByUser();
// getSecondHalfRecords();
