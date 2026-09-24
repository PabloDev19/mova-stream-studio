import Logo from '../assets/mova-stream-logo.png'
import './layout.css'

export const DashboardLayout = ({}) => {
  return (
    <section className="dashboard_layout">
      <article className="aside_menu">
        <div className="logo">
          <img src={Logo} alt="Logo Mova Stream Lab" />
          <p className="title">Mova Stream Lab</p>
        </div>

        <nav className="navigation">
          <a className="link active" href="#">
            Inicio
          </a>
          <a className="link" href="#">
            Comandos
          </a>
          <a className="link" href="#">
            Eventos
          </a>
          <a className="link" href="#">
            Economia
          </a>
          <a className="link" href="#">
            Configuración
          </a>
        </nav>
      </article>
      <article className="render_view"></article>
    </section>
  )
}
