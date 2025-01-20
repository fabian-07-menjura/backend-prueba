import { Router } from "express";
import { BusosControlador } from "../controladores/BusosControlador";
import { handleInputErrors } from "../middlewares/handleInputErrors";
import { body, param } from "express-validator";

const router = Router();

router.get("/busos", BusosControlador.getAll);

router.post(
  "/",
  [body("nombre").notEmpty().withMessage("el nombre no puede ir vacio")],
  handleInputErrors,
  BusosControlador.create
);

router.get(
  "/:id",
  [
    param("id")
      .isInt()
      .withMessage("identificador no valido")
      .custom((value) => value > 0)
      .withMessage("identificador negativo no valido"),
  ],
  handleInputErrors,
  BusosControlador.getById
);

router.put(
  "/:id",
  [
    param("id")
      .isInt()
      .withMessage("identificador no valido")
      .custom((value) => value > 0)
      .withMessage("identificador negativo no valido"),
  ],
  handleInputErrors,
  BusosControlador.updateById
);

router.delete(
  "/:id",
  [
    param("id")
      .isInt()
      .withMessage("identificador no valido")
      .custom((value) => value > 0)
      .withMessage("identificador negativo no valido"),
  ],
  handleInputErrors,
  BusosControlador.delete
);

export default router;
