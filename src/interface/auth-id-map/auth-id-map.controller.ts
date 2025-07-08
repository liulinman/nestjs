import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthIdMapService } from './auth-id-map.service';
import { UpdateAuthIdMapDto } from './dto/update-auth-id-map.dto';

@Controller('auth-id-map')
export class AuthIdMapController {
  constructor(private readonly authIdMapService: AuthIdMapService) {}

  /**新增修改cookie */
  @Post('/createCookie')
  create(@Body() createAuthIdMapDto: any) {
    return this.authIdMapService.create(createAuthIdMapDto);
  }

  /**查询erp模块权限 */
  @Post('/findModel')
  findAll(@Body() data: any) {
    return this.authIdMapService.findAll(data);
  }

  /**查找汉字是否存在 */
  @Post('/findWorld')
  findWorld(@Body() data: any) {
    return this.authIdMapService.findAll(data);
  }

  /**创建或者修改单词 */
  @Post('/createWorld')
  createWorld(@Body() data: any) {
    return this.authIdMapService.findAll(data);
  }

  /**删除单词-直接删除 */
  @Post('/deleteWorld')
  deleteWorld(@Body() data: any) {
    return this.authIdMapService.findAll(data);
  }

  /**查找所有单词 */
  @Post('/findAllWorld')
  findAllWorld(@Body() data: any) {
    return this.authIdMapService.findAll(data);
  }

  /**查找某个单词-模糊查询 */
  @Post('/findOneWorld')
  findOneWorld(@Body() data: any) {
    return this.authIdMapService.findAll(data);
  }

  /**映射英语单词 */
  @Post('/mappingWorld')
  mappingWorld(@Body() data: any) {
    return this.authIdMapService.findAll(data);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authIdMapService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAuthIdMapDto: UpdateAuthIdMapDto,
  ) {
    return this.authIdMapService.update(+id, updateAuthIdMapDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authIdMapService.remove(+id);
  }
}
