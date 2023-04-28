import { Router } from "express";
import * as filmsCategory from '../controllers/filmsCategoryController'

const router = Router()

router.get('/admin/categories/new', filmsCategory.admin)
router.post('/categories/save', filmsCategory.save)

export default router