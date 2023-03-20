import  { Router } from 'express'
import * as apiController from '../controller/ApiController'
const router = Router()

router.get('/ping', apiController.ping)

export default router