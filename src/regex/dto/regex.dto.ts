import {
  IsString,
  IsInt,
  IsNotEmpty,
  Min,
  Max,
  IsNumber,
} from 'class-validator';

export class RegexDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @Min(18)
  @Max(100)
  age: number;

  @IsString()
  @IsNotEmpty()
  email: string;
}
