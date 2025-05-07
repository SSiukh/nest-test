import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Places } from 'src/entities/places.entity';
import { Repository } from 'typeorm';
import { CreatePlaceDto } from './dto/create-place.dto';

@Injectable()
export class PlacesService {
  constructor(
    @InjectRepository(Places)
    private placesRepository: Repository<Places>,
  ) {}

  findAll(): Promise<Places[]> {
    return this.placesRepository.find();
  }

  findOne(id: number): Promise<Places | null> {
    return this.placesRepository.findOneBy({ id });
  }

  create(createPlaceDto: CreatePlaceDto): Promise<Places> {
    return this.placesRepository.save(createPlaceDto);
  }
}
