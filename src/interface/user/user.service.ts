import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { initModels } from 'src/database/init-models';
import { sequelizeModel } from 'src/config';

const { users } = initModels(sequelizeModel);

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    return await users.create(createUserDto);
  }

  async findAll() {
    // return await user.findAll();
    return await sequelizeModel.query(`select * from user`);
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
