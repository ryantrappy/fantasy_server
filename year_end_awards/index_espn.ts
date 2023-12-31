import { Client } from "espn-fantasy-football-api/node-dev";
import LeaguesController from "../src/controllers/espn/leagues.controller";
import { Boxscore } from "../src/interfaces/boxscore";
import { EspnTeam } from "../src/interfaces/espnTeam";
const _ = require("lodash");

// https://watsonfantasyfootball.espn.com/espnpartner/dallas/players/players_4374302_ESPNFantasyFootball_2023.json

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

// getSecondHalfRecords();
testTransactions();
