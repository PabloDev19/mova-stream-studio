export interface Command {
  id: number
  name: string
  description: string
  disabled: boolean
}

let commands: Command[] = [
  {
    id: 1,
    name: 'ayuda',
    description: 'Muestra un menu de ayuda',
    disabled: false
  }
]

export const CommandModel = {
  findAll(): Command[] {
    return commands
  },

  findById(id: number): Command | undefined {
    return commands.find((command) => command.id === id)
  },

  create(name: string, description: string, disabled: boolean): Command {
    const command: Command = {
      id: Date.now(),
      name,
      description,
      disabled
    }

    commands.push(command)
    return command
  },

  update(id: number, name: string, description: string, disabled: boolean): Command | undefined {
    const command = commands.find((command) => command.id === id)

    if (!command) return undefined

    command.name = name
    command.description = description
    command.disabled = disabled

    return command
  },

  delete(id: number): Boolean {
    const index = commands.findIndex((command) => command.id === id)
    if (index === -1) return false
    commands.splice(index, 1)
    return true
  }
}
