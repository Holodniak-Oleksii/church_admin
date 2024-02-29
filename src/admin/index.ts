import AdminJsExpress from "@adminjs/express";
import AdminJsSequelize from "@adminjs/sequelize";
import AdminJs from "adminjs";
import { database } from "../database";
import { authenticationOption } from "./option";
import { adminJsResources } from "./resources";

AdminJs.registerAdapter(AdminJsSequelize);

export const adminJs = new AdminJs({
  databases: [database],
  resources: adminJsResources,
});

export const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(
  adminJs,
  authenticationOption
);
