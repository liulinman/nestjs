import { Injectable } from '@nestjs/common';
import { CreateRegexDto } from './dto/create-regex.dto';
import { UpdateRegexDto } from './dto/update-regex.dto';
import { initModels } from 'src/database/init-models';
import { sequelizeModel } from 'src/config';

const { user } = initModels(sequelizeModel);

@Injectable()
export class RegexService {
  create(createRegexDto: CreateRegexDto) {
    return 'This action adds a new regex';
  }

  async findAll() {
    return await user.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} regex`;
  }

  update(id: number, updateRegexDto: UpdateRegexDto) {
    return `This action updates a #${id} regex`;
  }

  remove(id: number) {
    return `This action removes a #${id} regex`;
  }
}
