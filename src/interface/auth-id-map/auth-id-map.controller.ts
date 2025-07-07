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

  @Post('/createCookie')
  create(@Body() createAuthIdMapDto: any) {
    return this.authIdMapService.create(createAuthIdMapDto);
  }

  @Post('/findModel')
  findAll(@Body() data: any) {
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
