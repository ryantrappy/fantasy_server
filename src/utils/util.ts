import {User} from '../interfaces/users.interface';
// @ts-ignore
import { Client } from 'espn-fantasy-football-api/node-dev';
import {Response} from 'express';

export const isEmptyObject = (obj: object): boolean => {
    return !Object.keys(obj).length;
};

export const cleanReturnUserObject = (user: User): User => {
	return {
		email: user.email,
		_id: user._id,
		leagues: user.leagues
	};
};

export const addPrivateLeagueHeaders = (res: Response, client: Client) =>{
  if(res.locals.espn_s2){
    client.setCookies({ espnS2: res.locals.espn_s2, SWID: res.locals.swid });
  }
};

export const getClient = (leagueId: string, res: Response): Client =>{
  const client = new Client({ leagueId });
  if(res.locals.espn_s2){
    client.setCookies({ espnS2: res.locals.espn_s2, SWID: res.locals.swid });
  }
  return client;
};
