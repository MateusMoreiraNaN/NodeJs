import  { Router } from 'express'
import * as apiController from '../controller/ApiController'
const router = Router()

router.post('/email', apiController.createLogin)

export default router