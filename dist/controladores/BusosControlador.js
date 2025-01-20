"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusosControlador = void 0;
const busos_1 = __importDefault(require("../modelos/busos"));
// SOLICITAR TODOS LOS BUSOS
class BusosControlador {
    static getAll = async (req, res) => {
        try {
            const busos = await busos_1.default.findAll({
                order: [["createdAt", "DESC"]],
                // limit: 9,
            });
            res.json(busos);
        }
        catch (error) {
            res
                .status(500)
                .json({ error: "a ocurrido un error al solicitar los busos" });
        }
    };
    // CREACION DE BUSO
    static create = async (req, res) => {
        try {
            const buso = new busos_1.default(req.body);
            await buso.save();
            res.status(201).json("buso insertado correctamente");
        }
        catch (error) {
            //   console.log("a ocurrido un error");
            res.status(500).json({ error: "a ocurrido un error" });
        }
    };
    // TRAER BUSO POR ID
    static getById = async (req, res) => {
        try {
            const { id } = req.params;
            const buso = await busos_1.default.findByPk(id);
            if (!buso) {
                const error = new Error("Buso no encontrado");
                res.status(404).json({ error: error.message });
                return;
            }
            res.json(buso);
        }
        catch (error) {
            res.status(500).json({ error: "Hubo un error al solicitar el buso" });
        }
    };
    // ACTUALIZAR BUSO
    static updateById = async (req, res) => {
        try {
            const { id } = req.params;
            const buso = await busos_1.default.findByPk(id);
            if (!buso) {
                const error = new Error("Buso no encontrado");
                res.status(404).json({ error: error.message });
                return;
            }
            await buso.update(req.body);
            res.json("Buso actualizado correctamente");
        }
        catch (error) {
            res.status(500).json({ error: "Hubo un error al actualizar el buso" });
        }
    };
    // ELIMINAR BUSO
    static delete = async (req, res) => {
        try {
            const { id } = req.params;
            const buso = await busos_1.default.findByPk(id);
            if (!buso) {
                const error = new Error("Buso no encontrado");
                res.status(404).json({ error: error.message });
                return;
            }
            await buso.destroy();
            res.json("buso eliminado correctamente");
        }
        catch (error) {
            res.status(500).json({ error: "Hubo un error al eliminar el buso" });
        }
    };
}
exports.BusosControlador = BusosControlador;
//# sourceMappingURL=BusosControlador.js.map