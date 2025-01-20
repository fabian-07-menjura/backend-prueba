import type { Request, Response } from "express";
export declare class BusosControlador {
    static getAll: (req: Request, res: Response) => Promise<void>;
    static create: (req: Request, res: Response) => Promise<void>;
    static getById: (req: Request, res: Response) => Promise<void>;
    static updateById: (req: Request, res: Response) => Promise<void>;
    static delete: (req: Request, res: Response) => Promise<void>;
}
