import  { Router } from 'express'
import * as apiController from '../controller/ApiController'
const router = Router()

router.get('/emails', apiController.all)
router.post('/email', apiController.createLogin)
router.put('/email/:id', apiController.update)
router.delete('/email/:id', apiController.remove)

export default router