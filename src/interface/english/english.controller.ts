import { Body, Controller, Get, Post } from '@nestjs/common';

import { EnglishService } from './english.service';
import { AddEnglishWord } from './dto/english.dto';

@Controller('english')
export class EnglishController {
  constructor(private readonly englishService: EnglishService) {}

  /**查询单词 */
  @Get('/findWordList')
  findWordList() {
    return this.englishService.findWordList();
  }

  /**新增修改单词 */
  @Post('/addEnglishWord')
  addEnglishWord(@Body() data: AddEnglishWord) {
    return this.englishService.addEnglishWord(data);
  }

  /**判断单词是否已经存在 */

  /**修改单词 */
  @Post('/delEnglishWord')
  delEnglishWord(@Body() data: { id: number }) {
    return this.englishService.delEnglishWord(data);
  }
  /**删除单词 */
}
