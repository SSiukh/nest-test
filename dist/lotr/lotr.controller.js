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
exports.LotrController = void 0;
const common_1 = require("@nestjs/common");
const lotr_service_1 = require("./lotr.service");
const create_character_dto_1 = require("./dto/create-character.dto");
const auth_guard_1 = require("../guards/auth.guard");
let LotrController = class LotrController {
    lotrService;
    constructor(lotrService) {
        this.lotrService = lotrService;
    }
    findAll() {
        return this.lotrService.findAll();
    }
    findOne(id) {
        return this.lotrService.findOne(id);
    }
    create(createCharacterDto) {
        return this.lotrService.create(createCharacterDto);
    }
};
exports.LotrController = LotrController;
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LotrController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LotrController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_character_dto_1.CreateCharacterDto]),
    __metadata("design:returntype", void 0)
], LotrController.prototype, "create", null);
exports.LotrController = LotrController = __decorate([
    (0, common_1.Controller)('lotr'),
    __metadata("design:paramtypes", [lotr_service_1.LotrService])
], LotrController);
//# sourceMappingURL=lotr.controller.js.map