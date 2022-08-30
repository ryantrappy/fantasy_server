import { IsArray, IsEmail, IsString } from "class-validator";

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;

  @IsArray()
  public leagues: [string];

  @IsString()
  public espnId: string;

  @IsString()
  public sleeperId: string;
}

export class UpdateUserDto {
  @IsEmail()
  public email: string;

  @IsArray()
  public leagues: [string];
}
