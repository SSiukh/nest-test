import { Places } from 'src/entities/places.entity';
import { Repository } from 'typeorm';
import { CreatePlaceDto } from './dto/create-place.dto';
export declare class PlacesService {
    private placesRepository;
    constructor(placesRepository: Repository<Places>);
    findAll(): Promise<Places[]>;
    findOne(id: number): Promise<Places | null>;
    create(createPlaceDto: CreatePlaceDto): Promise<Places>;
}
