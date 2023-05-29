import { Router } from "express"

import * as apiController from '../controllers/apiController'

const router = Router()

router.get('/films', apiController.filmAll)
router.post('/film', apiController.filmAdd)
router.put('/film:id', apiController.filmUpdate)
router.delete('/film:id', apiController.filmRemove)



export default router

