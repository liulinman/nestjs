import { Injectable } from '@nestjs/common';
import { CreateAuthIdMapDto } from './dto/create-auth-id-map.dto';
import axios from 'axios';
import { initModels } from 'src/database/init-models';
import { sequelizeModel } from 'src/config';
import { FindModelDto } from './dto/find-auth-id-map.dto';
const { cookie } = initModels(sequelizeModel);

@Injectable()
export class AuthIdMapService {
  processItem(item, result) {
    // 如果当前节点有子节点，递归处理
    if (item.children && item.children.length > 0) {
      item.children.forEach((child) => {
        // 在每层递归时，我们检查child.extra.type
        if (child.extra && child.extra.type > 2) {
          if (result[child.title]) {
            result[`${child.title}_下钻`] = child.key;
          } else {
            result[child.title] = child.key;
          }

          // 递归处理子节点，传递递增的type值
          this.processItem(child, result);
        }
      });
    }
  }

  findType2Data(data, targetTitle) {
    let result = {};

    // 遍历数据
    data.forEach((item) => {
      // 查找目标title且type为2
      if (item.title === targetTitle && item.extra && item.extra.type === 2) {
        // 保存当前模块的title和key
        result[item.title] = item.key;

        // 如果有children，递归处理子节点
        if (item.children && item.children.length > 0) {
          item.children.forEach((child) => {
            if (child.extra) {
              // 如果子节点title和父节点title一样，加上下钻后缀
              if (result[child.title]) {
                result[`${child.title}_下钻`] = child.key;
              } else {
                result[child.title] = child.key;
              }
              this.processItem(child, result);
            }
          });
        }
      }

      // 如果有子节点，递归处理
      if (item.children && item.children.length > 0) {
        const subResult = this.findType2Data(item.children, targetTitle);
        // 合并子结果到父结果
        result = { ...result, ...subResult };
      }
    });

    return result;
  }

  findType2DataLabel(data) {
    let result = [];

    // 遍历数据
    data.forEach((item) => {
      // 只处理 type 为 2 的节点
      if (item.extra && item.extra.type === 2) {
        result.push({
          label: item.title,
          value: item.title,
        });
      }

      // 如果有子节点，递归处理
      if (item.children && item.children.length > 0) {
        // 合并子结果到父结果
        result = [...result, ...this.findType2DataLabel(item.children)];
      }
    });

    return result;
  }

  async create(createAuthIdMapDto: CreateAuthIdMapDto) {
    const { cookieValue, type } = createAuthIdMapDto;
    const res = await cookie.upsert({
      type,
      cookie: cookieValue,
    });

    return res;
  }

  // todo:怎么做业务错误返回的http请求状态，不是系统而是自己业务定义的错误。不然都是200无法区分

  async findAll(data: any) {
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
        return {
          code: 8001,
          message: '请重新上传cookie',
        };
      }

      const datas = this.findType2Data(res.data.data, `${model}`);

      return {
        code: 200,
        list: datas,
        message: Object.values(datas).length ? '查找成功' : '查找为空',
      };
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
        return {
          code: 8001,
          message: '请重新上传cookie',
        };
      }
      const datas = this.findType2DataLabel(res.data.data);
      return datas;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} authIdMap`;
  }

  remove(id: number) {
    return `This action removes a #${id} authIdMap`;
  }
}
