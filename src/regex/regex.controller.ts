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
import { CreateRegexDto } from './dto/create-regex.dto';
import { UpdateRegexDto } from './dto/update-regex.dto';

@Controller('regex')
export class RegexController {
  constructor(private readonly regexService: RegexService) {}

  @Post()
  create(@Body() createRegexDto: CreateRegexDto) {
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
  update(@Param('id') id: string, @Body() updateRegexDto: UpdateRegexDto) {
    return this.regexService.update(+id, updateRegexDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.regexService.remove(+id);
  }
}
