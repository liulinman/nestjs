import { Injectable } from '@nestjs/common';
import * as OSS from 'ali-oss';

@Injectable()
export class OssService {
  private client: OSS;

  constructor() {
    // 初始化阿里云 OSS 客户端
    this.client = new OSS({
      region: 'oss-cn-chengdu', // 填写你的OSS区域
      accessKeyId: 'LTAI5t7fUwUTbMjUGkaWExad', // 填写你的Access Key ID
      accessKeySecret: 'BKvlAfBsYfIWAe74Q33AmSLKHoNsu6', // 填写你的Access Key Secret
      bucket: 'englishpicture', // 填写你的Bucket名称
    });
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
