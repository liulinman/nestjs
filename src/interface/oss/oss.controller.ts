import { Controller, Post, Body, Param, Delete } from '@nestjs/common';
import { OssService } from './oss.service';
import { CreateOssDto } from './dto/create-oss.dto';

@Controller('oss')
export class OssController {
  constructor(private readonly ossService: OssService) {}

  @Post('/uploadFile')
  create(@Body() createOssDto: any) {
    return this.ossService.uploadFile(createOssDto);
  }

  @Delete('/deleteFile')
  remove(@Param('id') id: string) {
    return this.ossService.deleteFile(id);
  }
}
