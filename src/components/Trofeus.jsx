import { useState } from 'react'
import styles from '../css/Trofeus.module.css'
import { trofeus } from '../data/Trofeus.js'

const LIMITE = 10

// texto que aparece embaixo da placa de cada troféu
const nomes = {
  ouro: 'P1 · Ouro',
  prata: 'P2 · Prata',
  bronze: 'P3 · Bronze',
  futuro: 'A conquistar',
}

// 'java-plain' vira https://.../icons/java/java-plain.svg
function urlIcone(icone) {
  const pasta = icone.split('-')[0]
  return `https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/${pasta}/${icone}.svg`
}

// desenho da taça: "currentColor" pega a cor da medalha pelo CSS
function Taca({ icone }) {
  return (
    <svg viewBox="0 0 64 80" aria-hidden="true">
      <path d="M17 10H8c0 10 4 16 11 17" fill="none" stroke="currentColor" strokeWidth="4" />
      <path d="M47 10h9c0 10-4 16-11 17" fill="none" stroke="currentColor" strokeWidth="4" />
      <path d="M16 5h32v15c0 11-7 20-16 20S16 31 16 20z" fill="currentColor" />
      <path d="M21 9v12" stroke="#fff" strokeOpacity=".45" strokeWidth="3" strokeLinecap="round" />
      <image href={urlIcone(icone)} x="24" y="10" width="17" height="17" className={styles.gravado} />
      <rect x="28" y="40" width="8" height="11" fill="currentColor" />
      <path d="M21 51h22l3 8H18z" fill="currentColor" />
      <rect x="13" y="59" width="38" height="14" rx="2" fill="#2a2a36" stroke="#3a3a48" />
      <rect x="22" y="63" width="20" height="6" rx="1" fill="currentColor" opacity=".6" />
    </svg>
  )
}

function Trofeu({ trofeu }) {
  // clicar "ergue" o troféu e mostra os detalhes
  const [erguido, setErguido] = useState(false)

  let classes = `${styles.trofeu} ${styles[trofeu.medalha]}`
  if (erguido === true) {
    classes = `${classes} ${styles.erguido}`
  }

  let detalhe = `Conquistado em ${trofeu.ano}`
  if (trofeu.medalha === 'futuro') {
    detalhe = `Meta: ${trofeu.ano}`
  }

  return (
    <button className={classes} onClick={() => setErguido(!erguido)}>
      <Taca icone={trofeu.icone} />
      <span className={styles.placa}>{trofeu.tech}</span>
      <span className={styles.nivel}>{nomes[trofeu.medalha]}</span>
      <span className={styles.detalhe}>{detalhe}</span>
    </button>
  )
}

export default function Trofeus() {
  const [filtro, setFiltro] = useState('todos')
  const [verTudo, setVerTudo] = useState(false)

  // Separa só os troféus do filtro escolhido
  let filtrados = trofeus.lista
  if (filtro !== 'todos') {
    filtrados = trofeus.lista.filter((t) => t.medalha === filtro)
  }

  // Se a estante estiver fechada, mostra só os primeiros
  let visiveis = filtrados
  if (verTudo === false) {
    visiveis = filtrados.slice(0, LIMITE)
  }

  // Texto do botão muda se a estante estiver aberta
  let textoBotao = 'Ver mais ▼'

  if (verTudo === true) {
    textoBotao = 'Ver menos ▲'
  }

  // O botão só aparece se tiver mais troféus do que o limite
  let botaoVerMais = null
  if (filtrados.length > LIMITE) {
    botaoVerMais = (
      <div className={styles.mais}>
        <button className={styles.verMais} onClick={() => setVerTudo(!verTudo)}>
          {textoBotao}
        </button>
      </div>
    )
  }

  // Monta um card para cada troféu que vai aparecer
  const cards = []
  for (const trofeis of visiveis) {
    cards.push(<Trofeu key={trofeis.tech} trofeu={trofeis} />)
  }

  function escolher(id) {
    setFiltro(id)
    setVerTudo(false)
  }

  // devolve a classe "ativo" só para o filtro marcado (igual ao Header)
  function classeFiltro(id) {
    if (filtro === id) {
      return `${styles.filtro} ${styles.ativo}`
    }
    return styles.filtro
  }

  return (
    <section className={styles.secao} id="trofeus">
      <h2 className={styles.titulo}><span>{trofeus.secao}</span> {trofeus.titulo}</h2>
      <p className={styles.subtitulo}>{trofeus.subtitulo}</p>

      <div className={styles.filtros}>
        <button className={classeFiltro('todos')} onClick={() => escolher('todos')}>Todos</button>
        <button className={classeFiltro('ouro')} onClick={() => escolher('ouro')}><i className={`${styles.medalha} ${styles.ouro}`} />Ouro</button>
        <button className={classeFiltro('prata')} onClick={() => escolher('prata')}><i className={`${styles.medalha} ${styles.prata}`} />Prata</button>
        <button className={classeFiltro('bronze')} onClick={() => escolher('bronze')}><i className={`${styles.medalha} ${styles.bronze}`} />Bronze</button>
        <button className={classeFiltro('futuro')} onClick={() => escolher('futuro')}><i className={`${styles.medalha} ${styles.futuro}`} />A conquistar</button>
      </div>

      <div className={styles.estante}>
        {cards}
      </div>

      {botaoVerMais}
    </section>
  )
}