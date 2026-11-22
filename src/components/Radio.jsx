import styles from '../css/Radio.module.css'
import { radio } from '../data/Radio.js'

export default function Radio() {
  // copia o texto do canal para a área de transferência
  function copiar(canal) {
    navigator.clipboard.writeText(canal.copiar)
  }

  // um item da lista para cada canal
  const canais = []
  for (let i = 0; i < radio.canais.length; i++) {
    const canal = radio.canais[i]

    // texto do botão da direita: "Abrir ›" ou "Copiar"
    let textoAcao = 'Abrir ›'
    if (canal.acao === 'copiar') {
      textoAcao = 'Copiar'
    }

    const conteudo = (
      <>
        <span className={styles.numero}>CH 0{i + 1}</span>
        {/* ícone do Bootstrap Icons: "bi bi-github", "bi bi-linkedin"... */}
        <span className={styles.icone}><i className={`bi bi-${canal.icone}`} aria-hidden="true"></i></span>
        <span className={styles.info}>
          <strong>{canal.nome}</strong>
          <small>{canal.texto}</small>
        </span>
        <span className={styles.acao}>{textoAcao}</span>
      </>
    )

    // canal de copiar vira botão; canal de abrir vira link
    if (canal.acao === 'copiar') {
      canais.push(
        <button key={canal.nome} className={styles.canal} onClick={() => copiar(canal)}>{conteudo}</button>
      )
    } else {
      canais.push(
        <a key={canal.nome} className={styles.canal} href={canal.link} target="_blank" rel="noreferrer">{conteudo}</a>
      )
    }
  }

  return (
    <section className={styles.secao} id="radio">
      <div className={styles.grade}>

        {/* lado esquerdo: a chamada */}
        <div>
          <h2 className={styles.titulo}><span>{radio.secao}</span> {radio.titulo}</h2>
          <p className={styles.chamada}>{radio.chamada} <b>{radio.destaque}</b></p>
          <p className={styles.subtitulo}>{radio.subtitulo}</p>
        </div>

        {/* lado direito: a lista de canais */}
        <div className={styles.canais}>
          <div className={styles.canaisTopo}>
            <span>Canais da equipe</span>
            <span className={styles.verde}>● {radio.canais.length} disponíveis</span>
          </div>
          {canais}
        </div>

      </div>
    </section>
  )
}