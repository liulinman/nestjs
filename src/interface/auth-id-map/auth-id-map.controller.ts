import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AuthIdMapService } from './auth-id-map.service';
import { CreateAuthIdMapDto } from './dto/create-auth-id-map.dto';
import { FindModelDto } from './dto/find-auth-id-map.dto';

@Controller('auth-id-map')
export class AuthIdMapController {
  constructor(private readonly authIdMapService: AuthIdMapService) {}

  /**新增修改cookie */
  @Post('/createCookie')
  create(@Body() createAuthIdMapDto: CreateAuthIdMapDto) {
    return this.authIdMapService.createCookie(createAuthIdMapDto);
  }
  /**模块搜索 */
  @Get('/modelSearch')
  modelSearch() {
    return this.authIdMapService.modelSearch();
  }

  /**查询erp模块权限 */
  @Post('/findModel')
  findAll(@Body() data: FindModelDto) {
    return this.authIdMapService.findAllModel(data);
  }

  // /**查找汉字是否存在 */
  // @Post('/findWorld')
  // findWorld(@Body() data: FindWorldDto) {
  //   return this.authIdMapService.findAllModel(data);
  // }

  // /**创建或者修改单词 */
  // @Post('/createWorld')
  // createWorld(@Body() data: CreateWorldDto) {
  //   return this.authIdMapService.findAllModel(data);
  // }

  /**删除单词-直接删除 */
  @Post('/deleteWorld')
  deleteWorld(@Body() data: any) {
    return this.authIdMapService.findAllModel(data);
  }

  /**查找所有单词 */
  @Post('/findAllWorld')
  findAllWorld(@Body() data: any) {
    return this.authIdMapService.findAllModel(data);
  }

  /**查找某个单词-模糊查询 */
  @Post('/findOneWorld')
  findOneWorld(@Body() data: any) {
    return this.authIdMapService.findAllModel(data);
  }

  /**映射英语单词 */
  @Post('/mappingWorld')
  mappingWorld(@Body() data: any) {
    return this.authIdMapService.findAllModel(data);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authIdMapService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authIdMapService.remove(+id);
  }
}
