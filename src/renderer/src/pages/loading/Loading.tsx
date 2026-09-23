import './loading.css'
import Logo from '../../assets/mova-stream-logo.png'
import { Cards } from '@renderer/components/loading/Cards'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Loading = () => {
  const Navigate = useNavigate()

  useEffect(() => {
    //Simulacion automatica de carga
    const timer = setTimeout(() => {
      Navigate('dashboard')
    }, 5000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <section className="page loading">
      <article className="container">
        <div className="group head">
          <img className="logo" src={Logo} alt="Logo Mova Stream" />
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
          <Cards icon="fa-solid fa-link" label="Conectando plataformas" />
          <Cards icon="fa-solid fa-database" label="Cargando datos" />
          <Cards icon="fa-solid fa-gear" label="Preparando modulos" />
          <Cards icon="fa-solid fa-rocket" label="¿Listo para stream?" />
        </div>
      </article>
    </section>
  )
}
