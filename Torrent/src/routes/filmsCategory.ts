import { Router } from "express";
import * as filmsCategory from '../controllers/filmsCategoryController'

const router = Router()

router.get('/admin/categories/new', filmsCategory.admin)
router.post('/categories/save', filmsCategory.save)
router.get('/admin/categories/index', filmsCategory.adminCategory)
router.post('/categories/delete', filmsCategory.deleteId)
router.post('/categories/update')
router.get('/admin/categories/edit/:id', filmsCategory.edit)
router

export default router