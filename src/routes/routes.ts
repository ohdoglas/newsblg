import { Router } from "express";
import { newsBlgHome } from "../controllers/newsBlgHomeController";
import { getRecentNews } from "../controllers/newsController";
import { geminiController } from "../controllers/geminiController";


const routes = Router();

routes.get('/', newsBlgHome);

routes.post('/generate', geminiController)

routes.get('/news/:topic', getRecentNews)

export default routes;