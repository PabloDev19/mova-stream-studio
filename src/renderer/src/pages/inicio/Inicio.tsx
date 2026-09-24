import './inicio.css'

interface CardType {
  label: string
  icon: string
  color: string
  status: boolean
}

interface ResumenLogType {
  icon: string
  text: string
  value: string
}

interface ActivityLogType {
  social_media: string
  type: 'donation' | 'suscription' | 'command' | 'event'
  message: string
  time: string
}

const Card = ({ label, icon, color, status }: CardType) => {
  return (
    <section className="card">
      <i style={{ color: color }} className={icon}></i>
      <div className="group">
        <p className="title">{label}</p>
        <p style={{ color: status ? 'var(--success)' : 'var(--danger)' }} className="status">
          <i
            style={{ color: status ? 'var(--success)' : 'var(--danger)' }}
            className="icon fa-solid fa-circle"
          />{' '}
          {status ? 'Conectado' : 'Desconectado'}
        </p>
      </div>
      <button className="action">{status ? 'Gestionar' : 'Conectar'}</button>
    </section>
  )
}

const ResumenLog = ({ icon, text, value }: ResumenLogType) => {
  return (
    <div className="item">
      <h5 className="text">
        <i className={icon} /> {text}
      </h5>
      <h5 className="value">{value}</h5>
    </div>
  )
}

const ActivityLogItem = ({ social_media, type, message, time }: ActivityLogType) => {
  return (
    <section className="item">
      <p className="social_media">{social_media}</p>
      <span className="badge">Donación</span>
      <p className="message">{message}</p>
      <p className="time">{time}</p>
    </section>
  )
}

export const Inicio = () => {
  return (
    <section className="view_inicio">
      <h3 className="title">¡Hola, Pablo Placencia!</h3>
      <h4 className="sub_title">Tu ecosistema de streaming está listo</h4>

      <div style={{ flex: 1 }} className="container">
        <article className="streaming_media">
          <Card label="YouTube" icon="icon fa-brands fa-youtube" color="var(--yt-red)" status />
          <Card label="Twitch" icon="icon fa-brands fa-twitch" color="var(--twitch-purple)" />
          <Card
            label="Kick"
            icon="icon fa-brands fa-kickstarter"
            color="var(--kick-green)"
            status
          />
        </article>

        <article className="resumen_fast">
          <h4 className="title">Resumen rapido</h4>
          <ResumenLog icon="fa-solid fa-wand-magic-sparkles" text="Comandos activos" value="12" />
          <ResumenLog icon="fa-solid fa-calendar" text="Eventos activos" value="5" />
          <ResumenLog icon="fa-solid fa-users" text="Usuarios en el Chat" value="238" />
          <ResumenLog icon="fa-solid fa-star" text="Plan / Suscripción" value="Pro" />
        </article>
      </div>

      <div style={{ flex: 3 }} className="container">
        <article className="activity_log">
          <div className="group">
            <h2 className="label">Actividad reciente</h2>
            <a className="link" href="#">
              Ver todo <i className="icon fa-solid fa-arrow-right" />
            </a>
          </div>
          <ActivityLogItem
            social_media="Youtube"
            type="donation"
            message="LuisYT ha donado S/10.00"
            time="hace 2 min"
          />
          <ActivityLogItem
            social_media="Youtube"
            type="suscription"
            message="Shadow se ah suscrito tier 1"
            time="hace 5 min"
          />
          <ActivityLogItem
            social_media="Youtube"
            type="command"
            message="!saludar ejecutado por ElPichar"
            time="hace 8 min"
          />
          <ActivityLogItem
            social_media="Youtube"
            type="event"
            message="Se activo el evento del sorteo"
            time="hace 8 min"
          />
        </article>
        <article className="start_stream">
          <i className="icon fa-solid fa-gamepad" />
          <h2 className="title">¡Listo para el stream!</h2>
          <h3 className="message">
            Gestiona tus comandos, eventos y recompensas desde un solo lugar.
          </h3>

          <a href="#" className="link">
            Ver Comandos
          </a>
        </article>
      </div>
    </section>
  )
}
