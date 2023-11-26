import { Router } from 'express'

import { MovieController } from '../controllers/moviesController.js'

export const moviesRouter = Router()

moviesRouter.get('/', MovieController.getAll)
moviesRouter.post('/', MovieController.create)

moviesRouter.get('/:id', MovieController.getById)
moviesRouter.delete('/:id', MovieController.update)
moviesRouter.patch('/:id', MovieController.update)
