"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LotrModule = void 0;
const common_1 = require("@nestjs/common");
const lotr_service_1 = require("./lotr.service");
const lotr_controller_1 = require("./lotr.controller");
const typeorm_1 = require("@nestjs/typeorm");
const lotr_entity_1 = require("../entities/lotr.entity");
const places_entity_1 = require("../entities/places.entity");
let LotrModule = class LotrModule {
};
exports.LotrModule = LotrModule;
exports.LotrModule = LotrModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([lotr_entity_1.Lotr, places_entity_1.Places])],
        providers: [lotr_service_1.LotrService],
        controllers: [lotr_controller_1.LotrController],
    })
], LotrModule);
//# sourceMappingURL=lotr.module.js.map