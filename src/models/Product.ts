import { DataTypes, Model, Optional } from "sequelize";
import { database } from "../database";

export interface IParameterModel {
  name: string;
  value: string;
}

export interface IProductModel {
  id: string;
  title: string;
  //   files: IFileUploadedModel[];
  amount: number;
  description: string;
  parameters: IParameterModel[];
  price: number;
  category: string;
}

export interface ProductCreationAttributes
  extends Optional<IProductModel, "id"> {}

export interface ProductInstance
  extends Model<IProductModel, ProductCreationAttributes>,
    IProductModel {}

export const Product = database.define<ProductInstance, IProductModel>(
  "Product",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    amount: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    price: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    category: {
      allowNull: false,
      type: DataTypes.STRING,
      references: {
        model: "categories",
        key: "id",
      },
    },
    parameters: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  }
);
