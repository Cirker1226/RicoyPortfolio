import styles from '../css/Piloto.module.css'
import { piloto } from '../data/Piloto.js'
import { Informacoes } from '../data/Informacoes.js'

export default function Piloto() {
  return (
    <section className={styles.secao} id="piloto">
      <h2 className={styles.titulo}><span>{piloto.secao}</span> {piloto.titulo}</h2>
      <p className={styles.subtitulo}>{piloto.subtitulo}</p>

      <div className={styles.ficha}>  
        <div className={styles.foto}>
          <span className={styles.numeroPiloto} aria-hidden="true">{Informacoes.numero}</span>
          <div className={styles.nome}>
            <small>{Informacoes.cidade} - {Informacoes.estado}</small>
            <strong>{Informacoes.nome.toUpperCase()} {Informacoes.apelido.toUpperCase()}</strong>
          </div>
        </div>

        <div>
          <dl className={styles.dados}>
            <div><dt>Equipe</dt><dd>{piloto.equipe}</dd></div>
            <div><dt>Categoria</dt><dd>{piloto.categoria}</dd></div>
            <div><dt>Período</dt><dd>{piloto.periodo}</dd></div>
            <div><dt>Técnico</dt><dd>{piloto.tecnico}</dd></div>
            <div><dt>Base</dt><dd>{piloto.base}</dd></div>
            <div><dt>Status</dt><dd className={styles.verde}>{piloto.status}</dd></div>
          </dl>

          <p className={styles.bio}>{piloto.bio}</p>

          <div className={styles.stats}>
            <div className={styles.stat}><strong>{piloto.anosTecnologia}</strong><span>Anos na tecnologia</span></div>
            <div className={styles.stat}><strong>{piloto.anosProgramando}</strong><span>Anos programando</span></div>
            <div className={styles.stat}><strong>{piloto.experiencias}</strong><span>Experiências</span></div>
            <div className={styles.stat}><strong>{piloto.cafe}</strong><span>Litros de café consumidos</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}