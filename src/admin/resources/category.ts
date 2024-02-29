import { ResourceOptions } from "adminjs";

export const categoryResourceOptions: ResourceOptions = {
  navigation: "Category",
  editProperties: ["name"],
  filterProperties: ["name"],
  listProperties: ["id", "name"],
  showProperties: ["id", "name", "createdAt", "updatedAt"],
};
