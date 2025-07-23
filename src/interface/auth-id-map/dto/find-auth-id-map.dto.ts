import { IsNotEmpty, IsString } from 'class-validator';

export class FindModelDto {
  @IsString()
  @IsNotEmpty()
  model: string;
}

export class FindWorldDto {
  @IsString()
  @IsNotEmpty()
  chineseName: string;
}
