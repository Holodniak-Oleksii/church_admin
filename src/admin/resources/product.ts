import { ResourceOptions } from "adminjs";

export const productResourceOptions: ResourceOptions = {
  navigation: "Product",
  editProperties: [
    "title",
    "amount",
    "description",
    "price",
    "category",
    "parameters",
  ],
  filterProperties: ["title", "amount", "price", "category"],
  listProperties: ["id", "title", "amount", "price", "category"],
  showProperties: [
    "id",
    "title",
    "amount",
    "description",
    "price",
    "category",
    "createdAt",
    "updatedAt",
    "parameters",
  ],
};
