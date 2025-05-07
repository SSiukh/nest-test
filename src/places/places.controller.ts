import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { PlacesService } from './places.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { SkipThrottle } from '@nestjs/throttler';

@SkipThrottle()
@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Get()
  findAll() {
    return this.placesService.findAll();
  }

  @SkipThrottle({ default: false })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    this.placesService.findOne(id);
  }

  @Post()
  create(@Body() createPlaceDto: CreatePlaceDto) {
    return this.placesService.create(createPlaceDto);
  }
}
