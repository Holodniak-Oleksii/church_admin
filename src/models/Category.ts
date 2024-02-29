import { DataTypes, Model, Optional } from "sequelize";
import { database } from "../database";

export interface ICategoryModel {
  id: string;
  name: string;
}

export interface CategoryCreationAttributes
  extends Optional<ICategoryModel, "id"> {}

export interface CategoryInstance
  extends Model<ICategoryModel, CategoryCreationAttributes>,
    ICategoryModel {}

export const Category = database.define<CategoryInstance, ICategoryModel>(
  "Category",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }
);
