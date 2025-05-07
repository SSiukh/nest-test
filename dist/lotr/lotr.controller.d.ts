import { LotrService } from './lotr.service';
import { CreateCharacterDto } from './dto/create-character.dto';
export declare class LotrController {
    private readonly lotrService;
    constructor(lotrService: LotrService);
    findAll(): Promise<import("../entities/lotr.entity").Lotr[]>;
    findOne(id: number): Promise<import("../entities/lotr.entity").Lotr | null>;
    create(createCharacterDto: CreateCharacterDto): Promise<import("../entities/lotr.entity").Lotr>;
}
