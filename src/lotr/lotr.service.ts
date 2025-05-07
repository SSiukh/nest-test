import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lotr } from 'src/entities/lotr.entity';
import { Repository } from 'typeorm';
import { CreateCharacterDto } from './dto/create-character.dto';
import { Places } from 'src/entities/places.entity';

@Injectable()
export class LotrService {
  constructor(
    @InjectRepository(Lotr)
    private lotrRepository: Repository<Lotr>,

    @InjectRepository(Places)
    private placesRepository: Repository<Places>,
  ) {}

  findAll(): Promise<Lotr[]> {
    return this.lotrRepository.find();
  }

  async findOne(id: number): Promise<Lotr | null> {
    const character = await this.lotrRepository.findOneBy({ id });

    if (!character)
      throw new HttpException('Character not found', HttpStatus.NOT_FOUND);

    return character;
  }

  async create(createCharacterDto: CreateCharacterDto): Promise<Lotr> {
    const place = await this.placesRepository.findOneBy({
      id: createCharacterDto.placeId,
    });

    if (!place) {
      throw new NotFoundException(
        `Place with id ${createCharacterDto.placeId} not found!`,
      );
    }

    const character = this.lotrRepository.create({
      name: createCharacterDto.name,
      age: createCharacterDto.age,
      place,
    });

    return this.lotrRepository.save(character);
  }
}
