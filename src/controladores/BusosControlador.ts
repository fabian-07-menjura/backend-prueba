import type { Request, Response, NextFunction } from "express";
import Busos from "../modelos/busos";

// SOLICITAR TODOS LOS BUSOS
export class BusosControlador {
  static getAll = async (req: Request, res: Response) => {
    try {
      const busos = await Busos.findAll({
        order: [["createdAt", "DESC"]],
        // limit: 9,
      });
      res.json(busos);
    } catch (error) {
      res
        .status(500)
        .json({ error: "a ocurrido un error al solicitar los busos" });
    }
  };

  // CREACION DE BUSO
  static create = async (req: Request, res: Response) => {
    try {
      const buso = new Busos(req.body);
      await buso.save();
      res.status(201).json("buso insertado correctamente");
    } catch (error) {
      //   console.log("a ocurrido un error");
      res.status(500).json({ error: "a ocurrido un error" });
    }
  };

  // TRAER BUSO POR ID
  static getById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const buso = await Busos.findByPk(id);
      if (!buso) {
        const error = new Error("Buso no encontrado");
        res.status(404).json({ error: error.message });
        return;
      }
      res.json(buso);
    } catch (error) {
      res.status(500).json({ error: "Hubo un error al solicitar el buso" });
    }
  };

  // ACTUALIZAR BUSO
  static updateById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const buso = await Busos.findByPk(id);
      if (!buso) {
        const error = new Error("Buso no encontrado");
        res.status(404).json({ error: error.message });
        return;
      }
      await buso.update(req.body);
      res.json("Buso actualizado correctamente");
    } catch (error) {
      res.status(500).json({ error: "Hubo un error al actualizar el buso" });
    }
  };

  // ELIMINAR BUSO
  static delete = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const buso = await Busos.findByPk(id);
      if (!buso) {
        const error = new Error("Buso no encontrado");
        res.status(404).json({ error: error.message });
        return;
      }
      await buso.destroy();
      res.json("buso eliminado correctamente");
    } catch (error) {
      res.status(500).json({ error: "Hubo un error al eliminar el buso" });
    }
  };
}
