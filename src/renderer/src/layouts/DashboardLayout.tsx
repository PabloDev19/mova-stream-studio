import { Outlet } from 'react-router-dom'
import Logo from '../assets/mova-stream-logo.png'
import './layout.css'

export const DashboardLayout = ({}) => {
  return (
    <section className="dashboard_layout">
      <article className="aside_menu">
        <div className="logo">
          <img src={Logo} alt="Logo Mova Stream" />
          <p className="title">Mova Stream</p>
        </div>

        <nav className="navigation">
          <a className="link active" href="#">
            <i className="icon fa-solid fa-house"></i>
            <span className="text">Inicio</span>
          </a>
          <a className="link" href="#">
            <i className="icon fa-solid fa-compass-drafting"></i>
            <span className="text">Comandos</span>
          </a>
          <a className="link" href="#">
            <i className="icon fa-solid fa-calendar-days"></i>
            <span className="text">Eventos</span>
          </a>
          <a className="link" href="#">
            <i className="icon fa-solid fa-building-columns"></i>
            <span className="text">Economia</span>
          </a>
          <a className="link" href="#">
            <i className="icon fa-solid fa-gear"></i>
            <span className="text">Configuración</span>
          </a>
        </nav>

        <div className="footer">
          <p className="message">Sistema en linea</p>
          <p className="version">v1.0.0</p>
        </div>
      </article>
      <article className="render_view">
        <Outlet />
      </article>
    </section>
  )
}
