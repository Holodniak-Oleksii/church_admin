import AdminJsExpress from "@adminjs/express";
import AdminJsSequelize from "@adminjs/sequelize";
import AdminJs from "adminjs";
import { database } from "../database";
import { authenticationOption } from "./option";

AdminJs.registerAdapter(AdminJsSequelize);

export const adminJs = new AdminJs({
  databases: [database],
  //   resources: adminJsResources,
  //   locale: locale,
  //   dashboard: dashboardOptions,
  //   branding: brandingOptions,
});

export const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(
  adminJs,
  authenticationOption
);
