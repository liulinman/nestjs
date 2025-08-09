/*
 * @Author: yifeng 2108546503@qq.com
 * @Date: 2025-08-05 10:45:04
 * @LastEditors: yifeng 2108546503@qq.com
 * @LastEditTime: 2025-08-09 23:14:51
 * @FilePath: /nestjs/src/interface/english/dto/english.dto.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

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

export class ExistEnglishWord {
  @IsString()
  @IsNotEmpty()
  englishWord: string;
}

export class UpdateEnglishWord extends AddEnglishWord {
  @IsNumber()
  @IsNotEmpty()
  id: number;
}

export class FilterWordList {
  @IsString()
  @IsOptional()
  englishChinese?: string;
  @IsString()
  @IsOptional()
  englishWord?: string;
  @IsString()
  @IsOptional()
  englishType?: string;
  @IsString()
  @IsOptional()
  englishLevel?: string;
  @IsString()
  @IsOptional()
  startTime?: string;
  @IsString()
  @IsOptional()
  endTime?: string;
}
