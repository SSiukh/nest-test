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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Places = void 0;
const typeorm_1 = require("typeorm");
const lotr_entity_1 = require("./lotr.entity");
let Places = class Places {
    id;
    name;
    characters;
    createdAt;
    updatedAt;
};
exports.Places = Places;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Places.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Places.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => lotr_entity_1.Lotr, (character) => character.place),
    __metadata("design:type", Array)
], Places.prototype, "characters", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Places.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Places.prototype, "updatedAt", void 0);
exports.Places = Places = __decorate([
    (0, typeorm_1.Entity)()
], Places);
//# sourceMappingURL=places.entity.js.map