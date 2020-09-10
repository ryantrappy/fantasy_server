import {IsArray, IsDefined, IsNumber, IsString} from 'class-validator';

export class CreateRankingDto {
  @IsString()
  public rankingsTitle: string;

  @IsString()
  public introduction: string

	@IsString()
	public leagueId: string

	@IsArray()
	public teams: []

	@IsNumber()
	public week: number;

	@IsDefined()
	public year: number;
}
