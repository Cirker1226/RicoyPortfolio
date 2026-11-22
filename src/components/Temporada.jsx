import styles from '../css/Temporada.module.css'
import { temporada } from '../data/Temporada.js'

export default function Temporada() {
  // monta uma etapa (semestre) para cada item de temporada.etapas
  const etapas = []
  for (const etapa of temporada.etapas) {

    // etiqueta de status do semestre
    let status = <span className={`${styles.status} ${styles.prox}`}>A disputar</span>
    if (etapa.status === 'concluida') {
      status = <span className={`${styles.status} ${styles.ok}`}>🏁 Concluída</span>
    }
    if (etapa.status === 'atual') {
      status = <span className={`${styles.status} ${styles.agora}`}>● Em andamento</span>
    }

    // uma etiqueta para cada disciplina
    const etiquetas = []
    for (const disciplina of etapa.disciplinas) {
      etiquetas.push(<span key={disciplina} className={styles.etiqueta}>{disciplina}</span>)
    }

    etapas.push(
      <li key={etapa.rodada} className={`${styles.etapa} ${styles[etapa.status]}`}>
        <div className={styles.marco}>{etapa.rodada}</div>
        <div className={styles.card}>
          <header className={styles.topo}>
            <h3>{etapa.nome}</h3>
            {status}
          </header>
          <p className={styles.rodada}>
            {etapa.semestre} · {etapa.disciplinas.length} disciplinas
          </p>
          <div className={styles.etiquetas}>{etiquetas}</div>
        </div>
      </li>
    )
  }

  return (
    <section className={styles.secao} id="temporada">
      <h2 className={styles.titulo}><span>{temporada.secao}</span> {temporada.titulo}</h2>
      <p className={styles.subtitulo}>
        {temporada.subtitulo} <a className={styles.linkGrade} href={temporada.linkGrade} target="_blank" rel="noreferrer">Ver grade na PUC ↗</a>
      </p>

      <ol className={styles.calendario}>
        {etapas}

        {/* a última etapa: a formatura */}
        <li className={`${styles.etapa} ${styles.final}`}>
          <div className={styles.marco}>🏁</div>
          <div className={styles.card}>
            <header className={styles.topo}>
              <h3>{temporada.final.nome}</h3>
              <span className={`${styles.status} ${styles.prox}`}>Bandeira quadriculada</span>
            </header>
            <p className={styles.rodada}>{temporada.final.quando}</p>
            <p>{temporada.final.texto}</p>
          </div>
        </li>
      </ol>
    </section>
  )
}