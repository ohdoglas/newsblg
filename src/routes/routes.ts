import { Router } from "express";
import { newsBlgHome } from "../controllers/newsBlgHomeController";
import { createArticle } from "../controllers/createArticleController";
import { getRecentNews } from "../controllers/newsController";

const routes = Router();

routes.get('/', newsBlgHome);

routes.post('/generate', createArticle)

routes.get('/news/:topic', getRecentNews)

export default routes;