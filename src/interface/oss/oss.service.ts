/*
 * @Author: yifeng 2108546503@qq.com
 * @Date: 2025-08-31 21:08:19
 * @LastEditors: yifeng 2108546503@qq.com
 * @LastEditTime: 2025-09-17 17:21:50
 * @FilePath: /nestjs/src/interface/oss/oss.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Injectable } from '@nestjs/common';
import * as OSS from 'ali-oss';

@Injectable()
export class OssService {
  private client: OSS;

  constructor() {
    // 初始化阿里云 OSS 客户端
    this.client = new OSS({});
  }

  // 上传图片
  async uploadFile(file: any): Promise<string> {
    const { buffer } = file;
    const timestamp = Date.now(); // 获取当前时间戳
    const filename = `${timestamp}-${file.originalname}`; // 将时间戳与原文件名结合

    const result = await this.client.put(`imagesEnglish/${filename}`, buffer);

    // 返回上传的文件 URL
    return result.url;
  }

  // 删除图片
  async deleteFile(filename: string): Promise<void> {
    await this.client.delete(`imagesEnglish/${filename}`);
  }
}
