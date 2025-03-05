import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RegexService } from './regex.service';

@Controller('regex')
export class RegexController {
  constructor(private readonly regexService: RegexService) {}

  @Post()
  create(@Body() createRegexDto: any) {
    return this.regexService.create(createRegexDto);
  }

  @Get()
  findAll() {
    return this.regexService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regexService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegexDto: any) {
    return this.regexService.update(+id, updateRegexDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.regexService.remove(+id);
  }
}
