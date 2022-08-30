import * as mongoose from "mongoose";
import { League } from "../interfaces/league.interface";

const leagueSchema = new mongoose.Schema({
  leagueId: String,
  leagueName: String,
  leagueType: {
    type: Number,
    enum: [0, 1],
  },
});

const leagueModel = mongoose.model<League & mongoose.Document>(
  "League",
  leagueSchema
);

export default leagueModel;
