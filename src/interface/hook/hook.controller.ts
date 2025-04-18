import {
  Controller,
  Get,
  Post,
  Query,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HookService } from './hook.service';
import { CreateHookDto } from './dto/create-hook.dto';
import { UpdateHookDto } from './dto/update-hook.dto';

@Controller('hook')
export class HookController {
  constructor(private readonly hookService: HookService) {}

  @Post()
  create(@Body() createHookDto: CreateHookDto) {
    return this.hookService.create(createHookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hookService.remove(+id);
  }

  /**
   * 获取指定仓库中的文件内容
   * @param repoUrl 仓库的 URL
   * @param filePath 文件在仓库中的路径
   * @param token 用于访问 API 的令牌
   * @returns 文件的内容
   */
  @Get('file')
  async getFile(
    @Query('repoUrl') repoUrl: string,
    @Query('filePath') filePath: string,
    @Query('token') token: string,
  ) {
    console.log(`repoUrl:${repoUrl},filePath:${filePath},token:${token}`);
    return this.hookService.getFileFromRepo(repoUrl, filePath, token);
  }
}
