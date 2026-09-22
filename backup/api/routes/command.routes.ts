import { Router } from 'express'
import { CommandController } from '../controller/command.controller'

const router = Router()
router.get('/', CommandController.getAll)
router.get('/:id', CommandController.getById)
router.post('/', CommandController.create)
router.put('/:id', CommandController.update)
router.delete('/:id', CommandController.delete)
export default router
