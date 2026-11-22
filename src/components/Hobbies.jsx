import { useState, useEffect } from 'react'
import styles from '../css/Hobbies.module.css'
import { hobbies } from '../data/Hobbies.js'

function CardHobby({ hobby }) {
  const [atual, setAtual] = useState(0)

  // troca a foto sozinho a cada 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      if (atual === 2) {
        setAtual(0)
      } else {
        setAtual(atual + 1)
      }
    }, 5000)
    return () => clearTimeout(timer)
  }, [atual])

  return (
    <article className={styles.fav}>
      <span className={styles.fantasma}>{hobby.numero}</span>

      <div className={styles.galeria}>
        <figure className={styles.foto} key={atual}>
          <img src={hobby.fotos[atual]} alt="" />
        </figure>

        <div className={styles.pontos}>
          <button disabled={atual === 0} onClick={() => setAtual(0)}></button>
          <button disabled={atual === 1} onClick={() => setAtual(1)}></button>
          <button disabled={atual === 2} onClick={() => setAtual(2)}></button>
        </div>
      </div>

      <p className={styles.setor}>Hobby {hobby.numero}</p>
      <h3>{hobby.titulo}</h3>
      <p>{hobby.descricao}</p>
    </article>
  )
}

export default function Hobbies() {
  return (
    <section className={styles.secao} id="hobbies">
      <h2 className={styles.titulo}><span>{hobbies.secao}</span> {hobbies.titulo}</h2>
      <p className={styles.subtitulo}>{hobbies.subtitulo}</p>

      <div className={styles.favoritos}>
        <CardHobby hobby={hobbies.jogar} />
        <CardHobby hobby={hobbies.corridas} />
        <CardHobby hobby={hobbies.carros} />
      </div>
    </section>
  )
}
