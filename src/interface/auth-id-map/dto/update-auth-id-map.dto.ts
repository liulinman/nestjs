import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthIdMapDto } from './create-auth-id-map.dto';

export class UpdateAuthIdMapDto extends PartialType(CreateAuthIdMapDto) {}
