/*
 * @Author: yifeng 2108546503@qq.com
 * @Date: 2025-03-14 13:38:58
 * @LastEditors: yifeng 2108546503@qq.com
 * @LastEditTime: 2025-03-17 11:39:17
 * @FilePath: \bancked-project\src\interface\user\user.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { initModels } from 'src/database/init-models';
import { sequelizeModel } from 'src/config';

const { user } = initModels(sequelizeModel);

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    return await user.create(createUserDto);
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
