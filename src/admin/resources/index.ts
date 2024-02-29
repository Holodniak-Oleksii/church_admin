// array de todas as opções de models

import { ResourceWithOptions } from "adminjs";
import { Category, Product } from "../../models";
import { categoryResourceOptions } from "./category";
import { productResourceOptions } from "./product";

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Product,
    options: productResourceOptions,
  },
  {
    resource: Category,
    options: categoryResourceOptions,
  },
];
