import { Router } from "express";
import { newsBlgHome } from "../controllers/controllers";

const routes = Router();

routes.get('/', newsBlgHome);

export default routes;