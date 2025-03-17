import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  userName: string;
  @IsNotEmpty()
  userPassword: string;
  @IsNotEmpty()
  userPhone?: string;
  @IsNotEmpty()
  userAge?: string;
  @IsNotEmpty()
  userSex?: string;
}

export class UpdateUserDto {}
