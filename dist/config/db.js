"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.db = new sequelize_typescript_1.Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    models: [__dirname + "/../modelos/**/*"],
    host: process.env.DB_HOST,
    port: 3306,
    dialect: "mysql",
    logging: false,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});
//# sourceMappingURL=db.js.map