import { Router } from "express";
import * as controller from '../controllers/caixaController'


const router = Router()

router.get('/cartoes', controller.cartoes)
router.post('/cartao', controller.cartao)
router.get('/cartao/:id', controller.idCartao)
router.delete('/cartao/:id', controller.deleteCartao)
router.put('/cartao/:id', controller.updateCartao)

export default router