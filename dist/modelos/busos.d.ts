import { Model } from "sequelize-typescript";
declare class Busos extends Model {
    nombre: string;
    imagen: string;
    precio: number;
    cantidad: number;
    categoria: number;
}
export default Busos;
