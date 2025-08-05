import { Injectable } from '@nestjs/common';
import { sequelizeModel } from 'src/config';
import { initModels } from 'src/database/init-models';
import { AddEnglishWord } from './dto/english.dto';
const { english } = initModels(sequelizeModel);
@Injectable()
export class EnglishService {
  async addEnglishWord(data: AddEnglishWord) {
    try {
      await english.upsert(data);
      return true;
    } catch (error) {
      return false;
    }
  }

  async findWordList() {
    return await english.findAll();
  }

  async delEnglishWord(data: { id: number }) {
    const { id } = data;
    const res = await english.destroy({
      where: { id: id }, // 通过 id 字段进行删除
    });
    if (!res) {
      return false;
    } else {
      return true;
    }
  }
}
