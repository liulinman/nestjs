import { Controller } from '@nestjs/common';
import { EnglishService } from './english.service';

@Controller('english')
export class EnglishController {
  constructor(private readonly englishService: EnglishService) {
    /**新增单词 */
    /**修改单词 */
    /**删除单词 */
    /**查询单词 */
  }
}
