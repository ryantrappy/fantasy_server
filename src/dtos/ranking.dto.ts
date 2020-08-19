import {IsArray, IsEmail, IsString} from 'class-validator';

export class CreateRankingDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string

	@IsArray()
	public leagues: [string]
}
