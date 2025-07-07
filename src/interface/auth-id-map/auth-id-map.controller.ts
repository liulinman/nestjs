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
import { CreateAuthIdMapDto } from './dto/create-auth-id-map.dto';
import { UpdateAuthIdMapDto } from './dto/update-auth-id-map.dto';

@Controller('auth-id-map')
export class AuthIdMapController {
  constructor(private readonly authIdMapService: AuthIdMapService) {}

  @Post()
  create(@Body() createAuthIdMapDto: CreateAuthIdMapDto) {
    return this.authIdMapService.create(createAuthIdMapDto);
  }

  @Get()
  findAll() {
    return this.authIdMapService.findAll();
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
