import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { sequelizeModel } from 'src/config';
import { initModels } from 'src/database/init-models';
import {
  AddEnglishWord,
  ExistEnglishWord,
  UpdateEnglishWord,
} from './dto/english.dto';
const { english } = initModels(sequelizeModel);
@Injectable()
export class EnglishService {
  async addEnglishWord(data: AddEnglishWord) {
    try {
      await english.create(data);
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

  async existEnglishWord(data: ExistEnglishWord) {
    const { englishWord } = data;
    const res = await english.findOne({
      where: {
        englishWord,
      },
      raw: true,
    });
    return res ? true : false;
  }

  async updateEnglishWord(data: UpdateEnglishWord) {
    const { id } = data;
    try {
      const res = await english.update(data, {
        where: {
          id,
        },
      });

      return res?.length ? true : false;
    } catch (error) {
      throw new HttpException(
        { code: 4001, message: '单词/短语已经存在' },
        HttpStatus.BAD_REQUEST, // HTTP 状态码 400 表示请求错误
      );
    }
  }
}
