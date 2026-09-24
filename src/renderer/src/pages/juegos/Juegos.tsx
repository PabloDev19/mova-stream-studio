import { SubTitle, Title } from '@renderer/components/ui/Page'
import './juegos.css'

interface JuegoType {
  title: string
  label?: 'gta_sa' | 'mc_bedrock' | 'mc_java'
  commands: number
  photo: string
}

const ItemGame = ({ title, label, commands, photo }: JuegoType) => {
  return (
    <section className="card_game">
      <img
        className="photo"
        // src=""
        src={photo}
        alt="Imagen"
      />

      <h2 className="name">{title}</h2>
      <h4 className="commands">
        Comandos disponibles: <span className="value">{commands}</span>
      </h4>

      <div className="group">
        <button className="action setting">Configurar</button>
        <button className="action disconnect">Desconectar</button>
      </div>
    </section>
  )
}

export const Juegos = () => {
  return (
    <section className="page view_games">
      <div className="group">
        <Title>Integraciones de Juegos</Title>
        <SubTitle>Lista de juegos disponibles en Mova Stream</SubTitle>
      </div>

      <article className="container">
        <ItemGame
          title="Grand Theft Auto San Andreas"
          label="gta_sa"
          photo="https://media.vandal.net/m/22876/grand-theft-auto-san-andreas-20131213123259_1.jpg"
          commands={8}
        />
        <ItemGame
          title="Minecraft Bedrock"
          label="mc_bedrock"
          photo="https://cloudnord.net/assets/images/game-icons/minecraft-bedrock.webp"
          commands={4}
        />
        <ItemGame
          title="Minecraft Java"
          label="mc_java"
          photo="https://media.forgecdn.net/avatars/thumbnails/1797/653/256/256/639138535044607951.jpg"
          commands={12}
        />
      </article>
    </section>
  )
}
