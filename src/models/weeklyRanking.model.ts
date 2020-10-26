import * as mongoose from 'mongoose';
import {WeeklyRanking} from '../interfaces/weeklyRanking.interface';

const teamRankingSchema= new mongoose.Schema(
	{
		teamName: String,
    teamId: Number,
		description: String,
		managerName: String,
    position: Number,
		wins: Number,
		loss: Number,
		ties: Number,
		delta: { type: Number, default: 0 }
	});

const weeklyRankingSchema = new mongoose.Schema(
	{
		rankingsTitle: String,
		introduction: String,
		leagueId: String,
		week: Number,
		year: Number,
		teams: { type: [teamRankingSchema], required: true },
	});

const weeklyRankingModel = mongoose.model<WeeklyRanking & mongoose.Document>('Ranking', weeklyRankingSchema);
export default weeklyRankingModel;
