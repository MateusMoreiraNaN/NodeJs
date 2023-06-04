import { Router } from "express";
import { privateRoute } from "../config/passport";

//import * as ApiController from '../controllers/apiController'
import * as nickController from '../controllers/nickController'
import * as userController from '../controllers/UserController'



const router = Router()

router.get('/nicks', privateRoute, nickController.nicks)
router.post('/nick',privateRoute, nickController.nick)
router.post('/register', userController.register)
router.post('/login', userController.login)



export default router