import { Client } from "espn-fantasy-football-api/node-dev";
import { Boxscore } from "../src/interfaces/boxscore";
import { EspnTeam } from "../src/interfaces/espnTeam";
import {
  espnTransaction,
  LeagueTransactions,
  TransactionScore,
  UserTransactions,
} from "../src/interfaces/stats.interface";
import { getPlayerInformation } from "../src/services/espn.service";
const _ = require("lodash");

const espnLeagueId = "1140768";
const seasonId = 2023;
const playerCache: any = {};

const client = new Client({ leagueId: espnLeagueId });
client.setCookies({
  espnS2: "",
  SWID: "",
});

const getSecondHalfRecords = async () => {
  const secondHalfDataByUser: any = {};
  const usersData: [EspnTeam] = await client.getTeamsAtWeek({
    seasonId: seasonId,
    scoringPeriodId: 3,
  });
  console.log(usersData);
  for (const user of usersData) {
    secondHalfDataByUser[user.id] = {
      userId: user.id,
      userName: user.name,
      wins: 0,
      losses: 0,
      points: 0,
    };
  }

  for (let i = 6; i < 14; i++) {
    const result: [Boxscore] = await client.getBoxscoreForWeek({
      seasonId: seasonId,
      matchupPeriodId: i,
      scoringPeriodId: i,
    });

    console.log(result);
    for (const matchUp of result) {
      secondHalfDataByUser[matchUp.homeTeamId].points += matchUp.homeScore;
      secondHalfDataByUser[matchUp.awayTeamId].points += matchUp.awayScore;

      if (matchUp.homeScore > matchUp.awayScore) {
        secondHalfDataByUser[matchUp.homeTeamId].wins++;
      } else {
        secondHalfDataByUser[matchUp.homeTeamId].losses++;
      }

      if (matchUp.awayScore > matchUp.homeScore) {
        secondHalfDataByUser[matchUp.awayTeamId].wins++;
      } else {
        secondHalfDataByUser[matchUp.awayTeamId].losses++;
      }
    }
  }
  console.log(JSON.stringify(secondHalfDataByUser));
};

const testTransactions = async () => {
  const scoringPeriodId = 3;

  const transactions = await client
    .getTransactionsForPeriod({
      scoringPeriodId: scoringPeriodId,
      seasonId: seasonId,
    })
    .catch((e) => {
      console.log(e);
    });
  const other = transactions.filter((cur) => {
    return cur.status === "EXECUTED";
  });
  console.log(transactions);
};

const getPlayerDataSinceDate = async (
  playerId: number,
  startWeek: number,
  endWeek: number
) => {
  let totalPoints = 0;
  let playerStatsByWeek;
  if (playerCache[playerId] === undefined) {
    playerStatsByWeek = await getPlayerInformation(playerId, 2023);
  } else {
    playerStatsByWeek = playerCache[playerId];
  }

  for (let i: number = startWeek; i <= endWeek; i++) {
    if (playerStatsByWeek[i] && playerStatsByWeek[i].ACTUAL != undefined) {
      totalPoints = totalPoints + playerStatsByWeek[i].ACTUAL;
    }
  }
  return { totalPoints, name: playerStatsByWeek[0].FULL_NAME };
};

const getPointsForUserTransactions = async (
  userTransactions: UserTransactions
) => {
  for (const transaction of userTransactions.transactions) {
    const playerInfo = await getPlayerDataSinceDate(
      transaction.id,
      transaction.startWeek,
      transaction.endWeek
    );
    transaction.playerName = playerInfo.name;
    transaction.points = playerInfo.totalPoints;
  }
};
const createTransactionsByUser = async () => {
  const transactionDataByUser: LeagueTransactions = {};
  const outputObject: any = {};

  const usersData: [EspnTeam] = await client.getTeamsAtWeek({
    seasonId: seasonId,
    scoringPeriodId: 3,
  });
  for (const user of usersData) {
    transactionDataByUser[user.id] = {
      id: user.id,
      userName: user.name,
      transactions: [],
    };
  }

  for (let i = 0; i < 35; i++) {
    let transactions: espnTransaction[] = await client
      .getTransactionsForPeriod({
        scoringPeriodId: i,
        seasonId: seasonId,
      })
      .catch((e) => {
        console.log(e);
      });
    if (!transactions) {
      continue;
    }
    transactions = transactions.filter((cur) => {
      return (
        cur.status === "EXECUTED" &&
        cur.type != "DRAFT" &&
        cur.type === "FREEAGENT"
      );
    });

    for (const transaction of transactions) {
      for (const transactionItem of transaction.items) {
        if (transactionItem.type === "ADD") {
          const formattedTransaction: TransactionScore = {
            id: transactionItem.playerId,
            startWeek: transaction.scoringPeriodId,
            endWeek: 13,
            isOpen: true,
            points: 0,
          };
          transactionDataByUser[transaction.teamId].transactions.push(
            formattedTransaction
          );
        }

        if (transactionItem.type === "DROP") {
          const dropped = transactionDataByUser[
            transaction.teamId
          ].transactions.filter((cur) => {
            return cur.id === transactionItem.playerId;
          });

          for (const drop of dropped) {
            if (drop.isOpen) {
              drop.isOpen = false;
              drop.endWeek = i;
            }
          }
        }
      }
    }

    for (const user of usersData) {
      const userTransactions = transactionDataByUser[user.id];
      await getPointsForUserTransactions(userTransactions);
      let userScore = 0;

      for (const transaction of userTransactions.transactions) {
        userScore = userScore + transaction.points;
      }
      outputObject[user.name] = {
        totalPoints: userScore,
        pointsPerTrans: userScore / userTransactions.transactions.length,
      };
    }
  }

  console.log(JSON.stringify(transactionDataByUser));
  console.log(JSON.stringify(outputObject));
};

// 4374302

// getSecondHalfRecords();
// testTransactions();
createTransactionsByUser();
