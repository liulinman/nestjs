import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthIdMapDto } from './dto/create-auth-id-map.dto';
import axios from 'axios';
import { initModels } from 'src/database/init-models';
import { sequelizeModel } from 'src/config';
import { findType2Data, findType2DataLabel } from './auth-id-map.utils';
import { FindModelDto } from './dto/find-auth-id-map.dto';
const { cookie } = initModels(sequelizeModel);

@Injectable()
export class AuthIdMapService {
  async createCookie(createAuthIdMapDto: CreateAuthIdMapDto) {
    const { cookieValue, type } = createAuthIdMapDto;
    const res = await cookie.upsert({
      type,
      cookie: cookieValue,
    });

    return res;
  }

  async findAllModel(data: FindModelDto) {
    const { model } = data;
    const res1 = await cookie.findOne({
      where: {
        type: 'authId',
      },
      raw: true,
    });
    if (res1) {
      const { cookie } = res1;
      const res = await axios.post(
        'https://work-test.shuliantong.cn/api/iac/resource/list/all',
        {},
        {
          headers: {
            Cookie: `${cookie}`,
          },
        },
      );
      if (res && res.data.code === 8001) {
        throw new HttpException(
          { code: 4001, message: 'cookie已经无效，请上传新的 cookie' },
          HttpStatus.BAD_REQUEST, // HTTP 状态码 400 表示请求错误
        );
      }

      const data = findType2Data(res.data.data, `${model}`);

      return data;
    }
  }

  async modelSearch() {
    const res1 = await cookie.findOne({
      where: {
        type: 'authId',
      },
      raw: true,
    });

    if (res1) {
      // 1 把所有type===2的节点提取出来
      const { cookie } = res1;
      const res = await axios.post(
        'https://work-test.shuliantong.cn/api/iac/resource/list/all',
        {},
        {
          headers: {
            Cookie: `${cookie}`,
          },
        },
      );
      if (res && res.data.code === 8001) {
        throw new HttpException(
          { code: 4001, message: 'cookie已经无效，请上传新的 cookie' },
          HttpStatus.BAD_REQUEST, // HTTP 状态码 400 表示请求错误
        );
      }
      const data = findType2DataLabel(res.data.data);
      return data;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} authIdMap`;
  }

  remove(id: number) {
    return `This action removes a #${id} authIdMap`;
  }
}
