import { CommandModel } from '../model/command.model.ts'

export const CommandService = {
  getAll() {
    return CommandModel.findAll()
  },
  getById(id: number) {
    return CommandModel.findById(id)
  },
  create(name: string, description: string, disabled: boolean) {
    if (!name || !description) {
      throw new Error('Nombre, descripcion y disabled son obligatorios')
    }
    return CommandModel.create(name, description, disabled)
  },
  update(id: number, name: string, description: string, disabled: boolean) {
    const command = CommandModel.update(id, name, description, disabled)
    if (!command) {
      throw new Error('Comando no encontrado')
    }
    return command
  },
  delete(id: number) {
    const deleted = CommandModel.delete(id)
    if (!deleted) {
      throw new Error('Comando no encontrado')
    }
  }
}
