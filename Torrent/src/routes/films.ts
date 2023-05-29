import { Router} from "express";
import * as HomeController from '../controllers/homeController'
import * as filmsController from '../controllers/filmsController'

const router = Router()

router.get('/', HomeController.home)

export default router