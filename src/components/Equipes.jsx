import { useState } from 'react'
import styles from '../css/Equipes.module.css'
import { Trabalhos } from '../data/Trabalhos.js'
import { Ensinos } from '../data/Ensinos.js'

export default function Equipes() {
  const [filtro, setFiltro] = useState('todas')

  const lista = []
  if (filtro === 'todas' || filtro === 'trabalho') {
    for (const trabalho of Trabalhos) {
      lista.push(trabalho)
    }
  }
  if (filtro === 'todas' || filtro === 'academia') {
    for (const ensino of Ensinos) {
      lista.push(ensino)
    }
  }

  // Card para cada equipe da lista
  const cards = []
  for (const item of lista) {
    let status = <span className={`${styles.status} ${styles.concluida}`}>🏁 Concluída</span>
    if (item.atual) {
      status = <span className={`${styles.status} ${styles.agora}`}>● Atual</span>
    }

    // Lista para cada coisa que eu fiz
    const feitos = []
    for (const feito of item.feitos) {
      feitos.push(<li key={feito}>{feito}</li>)
    }

    cards.push(
      <article key={item.nome} className={`${styles.equipe} ${styles[item.cor]}`}>
        <header className={styles.topo}>
          <span className={styles.sigla}>{item.sigla}</span>
          <div className={styles.nome}>
            <h3>{item.nome}</h3>
            <small>{item.local} · {item.modelo}</small>
          </div>
          {status}
        </header>

        <p className={styles.cargo}>{item.cargo}</p>
        <p className={styles.periodo}>{item.periodo}</p>

        <ul className={styles.feitos}>{feitos}</ul>
      </article>
    )
  }

  // devolve a classe "ativo" só para o filtro marcado (igual ao Header)
  function classeFiltro(id) {
    if (filtro === id) {
      return `${styles.filtro} ${styles.ativo}`
    }
    return styles.filtro
  }

  return (
    <section className={styles.secao} id="equipes">
      <h2 className={styles.titulo}><span>05</span> Equipes</h2>
      <p className={styles.subtitulo}>
        Todo piloto tem um histórico de equipes. Estas são as garagens por onde já passei:
        no trabalho e nas academias onde estou me formando.
      </p>

      <div className={styles.filtros}>
        <button className={classeFiltro('todas')} onClick={() => setFiltro('todas')}>Todas</button>
        <button className={classeFiltro('trabalho')} onClick={() => setFiltro('trabalho')}>Equipes</button>
        <button className={classeFiltro('academia')} onClick={() => setFiltro('academia')}>Academia</button>
      </div>

      <div className={styles.equipes}>
        {cards}
      </div>
    </section>
  )
}