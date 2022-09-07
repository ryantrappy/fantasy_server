// @ts-ignore
import { Client } from "espn-fantasy-football-api/node-dev";
import { Response } from "express";

export const isEmptyObject = (obj: object): boolean => {
  return !Object.keys(obj).length;
};

export const addPrivateLeagueHeaders = (res: Response, client: Client) => {
  if (res.locals.espn_s2) {
    client.setCookies({ espnS2: res.locals.espn_s2, SWID: res.locals.swid });
  }
};

export const getClient = (leagueId: string, res: Response): Client => {
  res.locals.swid = "{D0A94500-4731-492D-8B35-B42F934ED91B}";
  res.locals.espn_s2 =
    "AECct%2BRhpXkWATOCvLtakeRmdgXd1rdWPgwkUB2Dp2yONCQ%2B7QsHXIBQaLsBDdOcpTt3s8fhXxH0KJz1WTOYjhcXMtSm1Pwr2nfguRziiPmbGgofCcF7oGUSiaXSiQEnPiiu%2BaoomhQx2J0hxGiULSCr2sUl60BxTJASQhhioxURWhjOmxkmoHp5I%2FNiIMQI%2BSQcT1iDyviCG7RKVOpbbIEQBbuKitMwelYBOjcexvqzKJJ1%2FWJG56dOgKyr768sVuXkpYwuuq0ahIBmkBsmTr%2Fe";

  const client = new Client({ leagueId });
  if (res.locals.espn_s2) {
    client.setCookies({ espnS2: res.locals.espn_s2, SWID: res.locals.swid });
  }
  return client;
};
