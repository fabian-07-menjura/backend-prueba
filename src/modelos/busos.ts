import {
  Table,
  Column,
  DataType,
  Model,
} from "sequelize-typescript";

@Table({
  tableName: "busos",
})
class Busos extends Model {
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  declare nombre: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  declare imagen: string;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
    validate: {
      notEmpty: true,
      isDecimal: true,
      min: 1,
    },
  })
  declare precio: number;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
    validate: {
      notEmpty: true,
      isDecimal: true,
      min: 1,
    },
  })
  declare cantidad: number;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
    validate: {
      notEmpty: true,
      isDecimal: true,
      min: 1,
    },
  })
  declare categoria: number;
}

export default Busos;
