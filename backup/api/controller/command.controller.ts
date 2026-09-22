// controllers/command.controller.ts

import { Request, Response } from 'express'
import { CommandService } from '../service/command.service'

export const CommandController = {
  getAll(_, res: Response) {
    const commands = CommandService.getAll()

    res.json(commands)
  },

  getById(req: Request, res: Response) {
    const id = Number(req.params.id)

    const command = CommandService.getById(id)

    if (!command) {
      res.status(404).json({
        message: 'Comando no encontrado'
      })
      return
    }

    res.json(command)
  },

  create(req: Request, res: Response) {
    try {
      const { name, description, disabled } = req.body

      const command = CommandService.create(name, description, disabled)

      res.status(201).json(command)
    } catch (error) {
      res.status(400).json({
        message: (error as Error).message
      })
    }
  },

  update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id)

      const { name, description, disabled } = req.body

      const command = CommandService.update(id, name, description, disabled)

      res.json(command)
    } catch (error) {
      res.status(404).json({
        message: (error as Error).message
      })
    }
  },

  delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id)

      CommandService.delete(id)

      res.status(204).send()
    } catch (error) {
      res.status(404).json({
        message: (error as Error).message
      })
    }
  }
}
