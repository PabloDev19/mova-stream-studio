import './inicio.css'

interface CardType {
  label: string
  icon: string
  color: string
}

interface ResumenLogType {
  icon: string
  text: string
  value: string
}

const Card = ({ label, icon, color }: CardType) => {
  return (
    <section className="card">
      <i style={{ color: color }} className={icon}></i>
      <div className="group">
        <p className="title">{label}</p>
        <p className="status">
          <i className="icon fa-solid fa-circle" /> Conectado
        </p>
      </div>
      <button className="action">Gestionar</button>
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

export const Inicio = () => {
  return (
    <section className="view_inicio">
      <h3 className="title">¡Hola, Pablo Placencia!</h3>
      <h4 className="sub_title">Tu ecosistema de streaming está listo</h4>

      <div className="container">
        <article className="streaming_media">
          <Card label="YouTube" icon="icon fa-brands fa-youtube" color="var(--yt-red)" />
          <Card label="Twitch" icon="icon fa-brands fa-twitch" color="var(--twitch-purple)" />
          <Card label="Kick" icon="icon fa-brands fa-kickstarter" color="var(--kick-green)" />
        </article>

        <article className="resumen_fast">
          <h4 className="title">Resumen rapido</h4>
          <ResumenLog icon="fa-solid fa-wand-magic-sparkles" text="Comandos activos" value="12" />
          <ResumenLog icon="fa-solid fa-calendar" text="Eventos activos" value="5" />
          <ResumenLog icon="fa-solid fa-users" text="Usuarios en el Chat" value="238" />
          <ResumenLog icon="fa-solid fa-star" text="Plan / Suscripción" value="Pro" />
        </article>
      </div>
    </section>
  )
}
