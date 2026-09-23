import React from 'react'

interface CardType {
  label: string
  icon: string
}

export const Cards = ({ icon, label }: CardType): React.JSX.Element => {
  return (
    <section className="card">
      <article className="icon">
        <i className={icon} />
      </article>
      <p className="text">{label}</p>
    </section>
  )
}
