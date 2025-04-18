import { Injectable } from '@nestjs/common';
import { CreateHookDto } from './dto/create-hook.dto';
import { UpdateHookDto } from './dto/update-hook.dto';
import { HttpService } from '@nestjs/axios';
import { AxiosRequestConfig } from 'axios';

@Injectable()
export class HookService {
  constructor(private readonly httpService: HttpService) {}
  create(createHookDto: CreateHookDto) {
    return 'This action adds a new hook';
  }

  findAll() {
    return `This action returns all hook`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hook`;
  }

  update(id: number, updateHookDto: UpdateHookDto) {
    return `This action updates a #${id} hook`;
  }

  remove(id: number) {
    return `This action removes a #${id} hook`;
  }

  /**
   * 从指定的仓库中获取文件内容
   * @param repoUrl 仓库的 URL
   * @param filePath 文件在仓库中的路径
   * @param token 用于访问 API 的令牌
   * @returns 文件的内容
   */
  async getFileFromRepo(
    repoUrl: string,
    filePath: string,
    token: string,
  ): Promise<string> {
    const url = `${repoUrl}/contents/${filePath}`;
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    // 配置请求，禁用 SSL 验证
    const config: any = {
      headers,
      httpsAgent: new (require('https').Agent)({
        rejectUnauthorized: false, // 禁用 SSL 验证
      }),
    };

    // 发起 GET 请求以获取文件内容
    const response = await this.httpService.get(url, config).toPromise();

    // 文件内容通常是 base64 编码的，需要解码
    return Buffer.from(response.data.content, 'base64').toString('utf-8');
  }
}
