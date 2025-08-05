import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AddEnglishWord {
  @IsString()
  @IsNotEmpty()
  englishWord: string;
  @IsString()
  @IsOptional()
  englishPhonetic?: string;
  @IsString()
  @IsOptional()
  englishType?: string;
  @IsString()
  @IsOptional()
  englishChinese?: string;
  @IsString()
  @IsOptional()
  englishNote?: string;
  @IsString()
  @IsOptional()
  englishLevel?: string;
  @IsString()
  @IsOptional()
  englishReference?: string;
  @IsString()
  @IsOptional()
  englishImg?: string;
}
