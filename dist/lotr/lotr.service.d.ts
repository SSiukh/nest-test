import { Lotr } from 'src/entities/lotr.entity';
import { Repository } from 'typeorm';
import { CreateCharacterDto } from './dto/create-character.dto';
import { Places } from 'src/entities/places.entity';
export declare class LotrService {
    private lotrRepository;
    private placesRepository;
    constructor(lotrRepository: Repository<Lotr>, placesRepository: Repository<Places>);
    findAll(): Promise<Lotr[]>;
    findOne(id: number): Promise<Lotr | null>;
    create(createCharacterDto: CreateCharacterDto): Promise<Lotr>;
}
