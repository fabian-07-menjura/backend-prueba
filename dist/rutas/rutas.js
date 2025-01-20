"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BusosControlador_1 = require("../controladores/BusosControlador");
const handleInputErrors_1 = require("../middlewares/handleInputErrors");
const express_validator_1 = require("express-validator");
const router = (0, express_1.Router)();
router.get("/busos", BusosControlador_1.BusosControlador.getAll);
router.post("/", [(0, express_validator_1.body)("nombre").notEmpty().withMessage("el nombre no puede ir vacio")], handleInputErrors_1.handleInputErrors, BusosControlador_1.BusosControlador.create);
router.get("/:id", [
    (0, express_validator_1.param)("id")
        .isInt()
        .withMessage("identificador no valido")
        .custom((value) => value > 0)
        .withMessage("identificador negativo no valido"),
], handleInputErrors_1.handleInputErrors, BusosControlador_1.BusosControlador.getById);
router.put("/:id", [
    (0, express_validator_1.param)("id")
        .isInt()
        .withMessage("identificador no valido")
        .custom((value) => value > 0)
        .withMessage("identificador negativo no valido"),
], handleInputErrors_1.handleInputErrors, BusosControlador_1.BusosControlador.updateById);
router.delete("/:id", [
    (0, express_validator_1.param)("id")
        .isInt()
        .withMessage("identificador no valido")
        .custom((value) => value > 0)
        .withMessage("identificador negativo no valido"),
], handleInputErrors_1.handleInputErrors, BusosControlador_1.BusosControlador.delete);
exports.default = router;
//# sourceMappingURL=rutas.js.map