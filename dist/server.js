"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const db_1 = require("./config/db");
const rutas_1 = __importDefault(require("./rutas/rutas"));
const path_1 = __importDefault(require("path"));
async function conectDB() {
    try {
        await db_1.db.authenticate();
        db_1.db.sync();
        console.log("conexion exitosa a la base de datos");
    }
    catch (err) {
        console.log("A OCURRIDO UN ERR EN LA CONEXION", err);
    }
}
conectDB();
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use("/tienda", rutas_1.default);
app.use("/public", express_1.default.static(path_1.default.join(__dirname, "../public")));
exports.default = app;
//# sourceMappingURL=server.js.map