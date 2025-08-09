import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { sequelizeModel } from 'src/config';
import { initModels } from 'src/database/init-models';
import {
  AddEnglishWord,
  ExistEnglishWord,
  FilterWordList,
  UpdateEnglishWord,
} from './dto/english.dto';
import { Op } from 'sequelize';
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
    return await english.findAll({
      order: [['englishCreateTime', 'DESC']], // 按照 createdAt 字段倒序排序
    });
  }

  async filterWordList(data: FilterWordList) {
    const {
      startTime,
      endTime,
      englishChinese,
      englishWord,
      englishType,
      englishLevel,
    } = data;

    let whereConditions: any = {};

    if (startTime && endTime) {
      whereConditions = {
        englishCreateTime: {
          [Op.between]: [startTime, endTime], // Filter records where englishCreateTime is within the range
        },
      };
    }

    // Add fuzzy search for englishChinese if provided
    if (englishChinese) {
      whereConditions.englishChinese = {
        [Op.like]: `%${englishChinese}%`, // Fuzzy search on englishChinese
      };
    }

    // Add fuzzy search for englishWord if provided
    if (englishWord) {
      whereConditions.englishWord = {
        [Op.like]: `%${englishWord}%`, // Fuzzy search on englishWord
      };
    }

    // Add exact match for englishType if provided
    if (englishType) {
      whereConditions.englishType = englishType;
    }

    // Add exact match for englishLevel if provided
    if (englishLevel) {
      whereConditions.englishLevel = englishLevel;
    }

    return await english.findAll({
      where: whereConditions,
      order: [['englishCreateTime', 'DESC']],
    });
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
    const { id, englishWord } = data;
    try {
      // 1 先排查当前单词
      const existingWord = await english.findOne({
        where: {
          englishWord, // 查找相同的单词
          id: { [Op.ne]: id }, // 排除当前更新的 id
        },
        raw: true,
      });

      // Step 2: 如果找到了相同的单词，则抛出异常
      if (existingWord) {
        return {
          code: 4001,
          data: false,
          message: '单词/短语已经存在',
        };
      }
      const res = await english.update(data, {
        where: {
          id,
        },
      });
      return res?.length ? true : false;
    } catch (error) {
      throw new HttpException(
        { code: 4002, data: false, message: '发生错误' },
        HttpStatus.BAD_REQUEST, // HTTP 状态码 400 表示请求错误
      );
    }
  }
}
