import { NavLink } from 'react-router-dom'
import Logo from '../assets/mova-stream-logo.png'

interface LinkNavigationType {
  icon: string
  label: string
  url: string
}

const LinkNavigation = ({ label, icon, url }: LinkNavigationType) => {
  return (
    <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link')} to={url}>
      <i className={`icon ${icon}`} />
      <span className="text">{label}</span>
    </NavLink>
  )
}

export const AsideMenu = () => {
  return (
    <article className="aside_menu">
      <div className="logo">
        <img src={Logo} alt="Logo Mova Stream" />
        <p className="title">Mova Stream</p>
      </div>

      <nav className="navigation">
        <LinkNavigation icon="fa-solid fa-house" label="Inicio" url="/dashboard" />
        <LinkNavigation
          icon="fa-solid fa-compass-drafting"
          label="Comandos"
          url="/dashboard/commands"
        />
        <LinkNavigation icon="fa-solid fa-calendar-days" label="Eventos" url="/dashboard/events" />
        <LinkNavigation
          icon="fa-solid fa-building-columns"
          label="Economia"
          url="/dashboard/economy"
        />
        <LinkNavigation icon="fa-solid fa-gear" label="Configuración" url="/dashboard/settings" />
      </nav>

      <div className="footer">
        <p className="message">Sistema en linea</p>
        <p className="version">v1.0.0</p>
      </div>
    </article>
  )
}
