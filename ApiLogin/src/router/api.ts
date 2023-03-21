import  { Router } from 'express'
import * as apiController from '../controller/ApiController'
const router = Router()

router.post('/emails', apiController.createLogin)

export default router