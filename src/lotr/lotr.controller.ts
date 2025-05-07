import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { LotrService } from './lotr.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('lotr')
export class LotrController {
  constructor(private readonly lotrService: LotrService) {}

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.lotrService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.lotrService.findOne(id);
  }

  @Post()
  create(@Body() createCharacterDto: CreateCharacterDto) {
    return this.lotrService.create(createCharacterDto);
  }
}
