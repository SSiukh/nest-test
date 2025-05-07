"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LotrService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const lotr_entity_1 = require("../entities/lotr.entity");
const typeorm_2 = require("typeorm");
const places_entity_1 = require("../entities/places.entity");
let LotrService = class LotrService {
    lotrRepository;
    placesRepository;
    constructor(lotrRepository, placesRepository) {
        this.lotrRepository = lotrRepository;
        this.placesRepository = placesRepository;
    }
    findAll() {
        return this.lotrRepository.find();
    }
    async findOne(id) {
        const character = await this.lotrRepository.findOneBy({ id });
        if (!character)
            throw new common_1.HttpException('Character not found', common_1.HttpStatus.NOT_FOUND);
        return character;
    }
    async create(createCharacterDto) {
        const place = await this.placesRepository.findOneBy({
            id: createCharacterDto.placeId,
        });
        if (!place) {
            throw new common_1.NotFoundException(`Place with id ${createCharacterDto.placeId} not found!`);
        }
        const character = this.lotrRepository.create({
            name: createCharacterDto.name,
            age: createCharacterDto.age,
            place,
        });
        return this.lotrRepository.save(character);
    }
};
exports.LotrService = LotrService;
exports.LotrService = LotrService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(lotr_entity_1.Lotr)),
    __param(1, (0, typeorm_1.InjectRepository)(places_entity_1.Places)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], LotrService);
//# sourceMappingURL=lotr.service.js.map