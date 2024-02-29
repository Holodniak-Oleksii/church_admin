import { database } from "./database";
// import { router } from "./routes";
import cors from "cors";
import express from "express";

import { adminJs, adminJsRouter } from "./admin";

// import  formidableMiddleware = require("express-formidable");

const app = express();
// app.use(
//   formidableMiddleware({
//     maxFileSize: 4 * 1024 * 1024 * 1024, // Set the maximum file size to 4GB
//   })
// );
app.use(express.static("public"));
app.use(express.json());
app.use(adminJs.options.rootPath, adminJsRouter);
app.use(cors());

const PORT = 5000;

app.listen(PORT, () => {
  database.authenticate().then(() => {
    console.log("DB connection successfull.");
  });

  console.log(`Server started successfuly at port ${PORT}.`);
});
