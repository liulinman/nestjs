import { PartialType } from '@nestjs/mapped-types';
import { CreateRegexDto } from './create-regex.dto';

export class UpdateRegexDto extends PartialType(CreateRegexDto) {}
