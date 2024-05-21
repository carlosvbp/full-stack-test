import "reflect-metadata";
import "express-async-errors";
import express, {Application, json} from "express";
import cors from "cors";
import { routes } from "./routers";
import { handleErrors } from "./middlewares/handleErrors.middleware";

const app: Application = express();
app.use(json());
app.use(cors());
app.use("/", routes);
app.use(handleErrors);

export default app;