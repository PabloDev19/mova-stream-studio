import './loading.css'

export const Loading = () => {
  return (
    <section className="page loading">
      <article className="container">
        <div className="group head">
          <h1 className="title">
            Mova <span>Stream</span>
          </h1>

          <h2 className="sub-title">Controla la diversion de tu contenido en un solo lugar.</h2>
        </div>

        <div className="group progress">
          <div className="bar">
            <div className="value" />
          </div>

          <h3 className="message">Inicializando la aplicación ...</h3>

          <h4 className="sub-message">
            Cargando configuración, conectando servicios y preparando todo para ti
          </h4>
        </div>

        <div className="group cards">
          <section className="card">
            <article className="icon">
              <i className="fa-solid fa-link" />
            </article>
            <p className="text">Conectando plataformas</p>
          </section>
          <section className="card">
            <article className="icon">
              <i className="fa-solid fa-database" />
            </article>
            <p className="text">Cargando datos</p>
          </section>
          <section className="card">
            <article className="icon">
              <i className="fa-solid fa-gear" />
            </article>
            <p className="text">Preparando modulos</p>
          </section>
          <section className="card">
            <article className="icon">
              <i className="fa-solid fa-rocket" />
            </article>
            <p className="text">¿Listo para stream?</p>
          </section>
        </div>
      </article>
    </section>
  )
}
