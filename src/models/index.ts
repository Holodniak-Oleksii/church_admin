import { Category } from "./Category";
import { Product } from "./Product";

Category.hasMany(Product, {
  as: "products",
  foreignKey: "id",
});

export { Category, Product };
