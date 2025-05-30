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
exports.PlacesController = void 0;
const common_1 = require("@nestjs/common");
const places_service_1 = require("./places.service");
const create_place_dto_1 = require("./dto/create-place.dto");
const throttler_1 = require("@nestjs/throttler");
let PlacesController = class PlacesController {
    placesService;
    constructor(placesService) {
        this.placesService = placesService;
    }
    findAll() {
        return this.placesService.findAll();
    }
    findOne(id) {
        this.placesService.findOne(id);
    }
    create(createPlaceDto) {
        return this.placesService.create(createPlaceDto);
    }
};
exports.PlacesController = PlacesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlacesController.prototype, "findAll", null);
__decorate([
    (0, throttler_1.SkipThrottle)({ default: false }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PlacesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_place_dto_1.CreatePlaceDto]),
    __metadata("design:returntype", void 0)
], PlacesController.prototype, "create", null);
exports.PlacesController = PlacesController = __decorate([
    (0, throttler_1.SkipThrottle)(),
    (0, common_1.Controller)('places'),
    __metadata("design:paramtypes", [places_service_1.PlacesService])
], PlacesController);
//# sourceMappingURL=places.controller.js.map