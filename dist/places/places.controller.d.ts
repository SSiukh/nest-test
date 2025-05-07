import { PlacesService } from './places.service';
import { CreatePlaceDto } from './dto/create-place.dto';
export declare class PlacesController {
    private readonly placesService;
    constructor(placesService: PlacesService);
    findAll(): Promise<import("../entities/places.entity").Places[]>;
    findOne(id: number): void;
    create(createPlaceDto: CreatePlaceDto): Promise<import("../entities/places.entity").Places>;
}
