import { useState } from 'react'
import styles from '../css/Garagem.module.css'
import { garagem } from '../data/Garagem.js'

// nome do pneu que aparece no canto de cada card
const nomes = {
  macio: 'Macio',
  medio: 'Médio',
  duro: 'Duro',
}

function Projeto({ projeto, posicao }) {
    let foto = <div className={styles.semFoto}>screenshot do projeto</div>
    if (projeto.imagem !== '') {
        foto = (
            <div className={styles.degrade}>
                <img className={styles.foto} src={projeto.imagem} alt={`Tela do projeto ${projeto.nome}`} />
            </div>
        )
    }
    
    // etiqueta para cada tecnologia
    const chips = []

    for (const tech of projeto.techs) {
        
        // push para inclui-r no array
        chips.push(<span key={tech} className={styles.chip}>{tech}</span>)
    }

    // os links só aparecem se existirem no garagem.js
    let linkCodigo = null
    if (projeto.codigo) {
        linkCodigo = <a href={projeto.codigo} target="_blank" rel="noreferrer">Código ↗</a>
    }

    let linkDemo = null
    if (projeto.demo) {
        linkDemo = <a href={projeto.demo} target="_blank" rel="noreferrer">Demo ↗</a>
    }

    return (
        <article className={`${styles.projeto} ${styles[projeto.pneu]}`}>
      {foto}

      <div className={styles.topo}>
        <span className={styles.posicao}>P{posicao}</span>
        <span className={styles.composto}>
          <i className={`${styles.bolinha} ${styles[projeto.pneu]}`} />
          {nomes[projeto.pneu]}
        </span>
      </div>

      <h3>{projeto.nome}</h3>
      <p>{projeto.descricao}</p>

      <div className={styles.chips}>{chips}</div>
      <div className={styles.links}>
        {linkCodigo}
        {linkDemo}
      </div>
    </article>
  )
}

export default function Garagem() {
    const [filtro, setFiltro] = useState('todos')
    
    // monta um card para cada projeto do filtro escolhido
    const cards = []
    for (let i = 0; i < garagem.lista.length; i++) {
        
        const projeto = garagem.lista[i]

        if (filtro === 'todos' || projeto.pneu === filtro) {
            // push para inclui-r no array
            cards.push(<Projeto key={projeto.nome} projeto={projeto} posicao={i + 1} />)
    }
  }

  // devolve a classe "ativo" só para o filtro marcado (igual ao Header)
  function classeFiltro(id) {

    if (filtro === id) {
      return `${styles.filtro} ${styles.ativo}`
    }

    return styles.filtro
  }

  return (
    <section className={styles.secao} id="garagem">
      <h2 className={styles.titulo}><span>{garagem.secao}</span> {garagem.titulo}</h2>
      <p className={styles.subtitulo}>{garagem.subtitulo}</p>

      <div className={styles.filtros}>
        <button className={classeFiltro('todos')} onClick={() => setFiltro('todos')}>Todos</button>
        <button className={classeFiltro('macio')} onClick={() => setFiltro('macio')}><i className={`${styles.bolinha} ${styles.macio}`} />Front-end</button>
        <button className={classeFiltro('medio')} onClick={() => setFiltro('medio')}><i className={`${styles.bolinha} ${styles.medio}`} />Back-end</button>
        <button className={classeFiltro('duro')} onClick={() => setFiltro('duro')}><i className={`${styles.bolinha} ${styles.duro}`} />Full-stack</button>
      </div>

      <div className={styles.projetos}>
        {cards}
      </div>
    </section>
  )
}