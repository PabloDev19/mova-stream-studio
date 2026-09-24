import { SubTitle, Title } from '@renderer/components/ui/Page'
import './comandos.css'
import { Link } from 'react-router-dom'

type Platform = 'youtube' | 'twitch' | 'kick'

interface CommandItemType {
  id: number
  command: string
  description: string
  platforms: Platform[]
  status: boolean
}

interface SocialMediaIconProps {
  brand: Platform
}

const SocialMediaIcon = ({ brand }: SocialMediaIconProps) => {
  switch (brand) {
    case 'youtube':
      return (
        <span className="platform youtube">
          <i className="fa-brands fa-youtube" />
        </span>
      )

    case 'twitch':
      return (
        <span className="platform twitch">
          <i className="fa-brands fa-twitch" />
        </span>
      )

    case 'kick':
      return (
        <span className="platform kick">
          <i className="fa-brands fa-kickstarter-k" />
        </span>
      )
  }
}

const CommandItem = ({ id, command, description, platforms, status }: CommandItemType) => {
  return (
    <tr>
      <td>
        <span className="command-name">!{command}</span>
      </td>

      <td>
        <span className="description">{description}</span>
      </td>

      <td className="platforms">
        <div className="platform-list">
          {platforms.map((platform, index) => (
            <SocialMediaIcon key={index} brand={platform} />
          ))}
        </div>
      </td>

      <td className="status">
        <span className="status-badge active">
          <span className="status-dot" />
          {status ? 'Activo' : 'Inactivo'}
        </span>
      </td>

      <td className="actions">
        <div className="action-buttons">
          <Link className="action edit" to="/">
            <i className="fa-solid fa-pen-to-square" />
          </Link>

          <Link className="action delete" to="/">
            <i className="fa-solid fa-trash" />
          </Link>
        </div>
      </td>
    </tr>
  )
}

export const Comandos = () => {
  return (
    <section className="page view_command">
      <article className="header">
        <article className="group">
          <Title>Comandos</Title>
          <SubTitle>Tu ecosistema de streaming está listo</SubTitle>
        </article>

        <button className="link">
          <i className="icon fa-solid fa-plus"></i>Nuevo comando
        </button>
      </article>

      <article className="search-query">
        <div className="input-group">
          <i className="icon fa-solid fa-magnifying-glass" />
          <input className="search" type="text" placeholder="Buscar comandos ..." />
        </div>

        <select className="select-group" name="" id="">
          <option value="">Todos</option>
          <option value="">GTA SA</option>
          <option value="">Minecraft</option>
        </select>
      </article>

      <table className="group-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th className="platforms">Plataformas</th>
            <th className="status">Estado</th>
            <th className="actions">Acciones</th>
          </tr>
        </thead>

        <tbody>
          <CommandItem
            id={0}
            status
            command="bomba"
            description="Aparece una bomba en la posición del jugador"
            platforms={['youtube', 'kick']}
          />
          <CommandItem
            id={0}
            status
            command="creeper"
            description="Aparece una bomba en la posición del jugador"
            platforms={['twitch', 'youtube']}
          />
          <CommandItem
            id={0}
            status
            command="sky"
            description="Aparece una bomba en la posición del jugador"
            platforms={['kick', 'twitch', 'youtube']}
          />
          <CommandItem
            id={0}
            status
            command="zombie"
            description="Aparece una bomba en la posición del jugador"
            platforms={['kick']}
          />
        </tbody>
      </table>
    </section>
  )
}
