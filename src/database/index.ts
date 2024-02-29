import { Sequelize } from "sequelize";

export const database = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  database: "admin",
  username: "postgres",
  password: "1111",
  define: {
    underscored: true,
  },
});
