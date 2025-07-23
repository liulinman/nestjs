import { IsString, IsNotEmpty } from 'class-validator';

export class CreateAuthIdMapDto {
  @IsString()
  @IsNotEmpty()
  cookieValue: string;

  @IsString()
  @IsNotEmpty()
  type: string;
}

export class CreateWorldDto {
  @IsString()
  @IsNotEmpty()
  chineseName: string;

  @IsString()
  @IsNotEmpty()
  englishName: string;
}
