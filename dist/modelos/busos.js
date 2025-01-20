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
const sequelize_typescript_1 = require("sequelize-typescript");
let Busos = class Busos extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    }),
    __metadata("design:type", String)
], Busos.prototype, "nombre", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    }),
    __metadata("design:type", String)
], Busos.prototype, "imagen", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL,
        allowNull: false,
        validate: {
            notEmpty: true,
            isDecimal: true,
            min: 1,
        },
    }),
    __metadata("design:type", Number)
], Busos.prototype, "precio", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL,
        allowNull: false,
        validate: {
            notEmpty: true,
            isDecimal: true,
            min: 1,
        },
    }),
    __metadata("design:type", Number)
], Busos.prototype, "cantidad", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL,
        allowNull: false,
        validate: {
            notEmpty: true,
            isDecimal: true,
            min: 1,
        },
    }),
    __metadata("design:type", Number)
], Busos.prototype, "categoria", void 0);
Busos = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "busos",
    })
], Busos);
exports.default = Busos;
//# sourceMappingURL=busos.js.map