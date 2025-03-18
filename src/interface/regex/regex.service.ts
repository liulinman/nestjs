import { Injectable } from '@nestjs/common';
import { initModels } from 'src/database/init-models';
import { sequelizeModel } from 'src/config';

const { users } = initModels(sequelizeModel);

@Injectable()
export class RegexService {
  create(createRegexDto: any) {
    return 'This action adds a new regex';
  }

  async findAll() {
    return await users.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} regex`;
  }

  update(id: number, updateRegexDto: any) {
    return `This action updates a #${id} regex`;
  }

  remove(id: number) {
    return `This action removes a #${id} regex`;
  }
}
