import _ from "lodash";
import axios, { AxiosResponse } from "axios";
import { WatsonPlayer } from "../interfaces/watsonPlayer.interface";
const espnPlayerApi =
  "https://watsonfantasyfootball.espn.com/espnpartner/dallas/players";

export const buildAxiosConfig = (config: any) => {
  if (this.espnS2 && this.SWID) {
    const headers = { Cookie: `espn_s2=${this.espnS2}; SWID=${this.SWID};` };
    return _.merge({}, config, { headers, withCredentials: true });
  }

  return config;
};

export const getPlayerInformation = (
  playerId: number,
  year = 2023
): Promise<WatsonPlayer[]> => {
  const path = `/players_${playerId}_ESPNFantasyFootball_${year}.json`;
  const axiosConfig = buildAxiosConfig({
    baseURL: espnPlayerApi,
  });

  return axios
    .get(path, axiosConfig)
    .then((response: AxiosResponse<WatsonPlayer[], any>) => {
      return response.data;
    });
};
