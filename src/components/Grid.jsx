import styles from '../css/Grid.module.css'
import { Informacoes } from '../data/Informacoes'
import { grid } from '../data/Grid'

export default function Grid() {
    return (
        <section className={styles.hero} id="inicio">
            
            {/* linhas de vento */}
            <div className={styles.velocidade} aria-hidden="true">
                <span></span><span></span><span></span><span></span><span></span><span></span>
            </div>

            <div className={styles.numero} aria-hidden="true">{Informacoes.numero}</div>

            <div className={styles.conteudo}>
                <p className={styles.tag}>{grid.tag}</p>
                <h1 className={styles.titulo}>{Informacoes.nome}<br /><span>{Informacoes.apelido}</span></h1>
                <p className={styles.sub}>{grid.descricao}</p>
                <div className={styles.botoes}>
                    <a href="#garagem" className={`${styles.btn} ${styles.primario}`}>Ver projetos ›</a>
                    <a href="#radio" className={`${styles.btn} ${styles.secundario}`}>Chamar no rádio</a>
                </div>
            </div>

            <aside className={styles.lado}>
                <div className={styles.terminal}>
                    <div className={styles.barra}>
                        <div className={styles.luzes} aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
                        <span className={`${styles.aba} ${styles.abaAtiva}`}>piloto.js</span>
                        <span className={styles.aba}>garagem.java</span>
                    </div>


                    {/* Terminal da direita */}

                    <div className={styles.corpo}>
                        <pre className={styles.linhas} aria-hidden="true">{'1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13'}</pre>
                        <pre className={styles.codigo}>
                            <span className={styles.com}>// piloto.js · temporada 2026</span>{'\n'}
                            <span className={styles.kw}>const </span><span className={styles.var}>piloto</span>{' = {\n'}
                            {'  '}<span className={styles.prop}>nome</span>{': '}<span className={styles.str}>"{Informacoes.nome} {Informacoes.apelido}</span>{',\n'}
                            {'  '}<span className={styles.prop}>numero</span>{': '}<span className={styles.num}>{Informacoes.numero}</span>{',\n'}
                            {'  '}<span className={styles.prop}>equipe</span>{': '}<span className={styles.str}>{Informacoes.instituicao}</span>{',\n'}
                            {'  '}<span className={styles.prop}>curso</span>{': '}<span className={styles.str}>{Informacoes.bacharelal}</span>{',\n'}
                            {'  '}<span className={styles.prop}>role</span>{': '}<span className={styles.str}>{Informacoes.cargo}</span>{'\n'}
                            {'  '}<span className={styles.prop}>periodo</span>{': '}<span className={styles.num}>{Informacoes.periodo}</span>{',\n'}
                            {'  '}<span className={styles.prop}>base</span>{': '}<span className={styles.str}>{Informacoes.cidade}</span>{',\n'}
                            {'  '}<span className={styles.prop}>status</span>{': '}<span className={styles.str}>"em pista"</span>{',\n'}
                            {'};\n\n'}
                            <span className={styles.fn}>largada</span>{'('}<span className={styles.var}>piloto</span>{');'}
                        </pre>
                    </div>

                    <div className={styles.status}>
                        <span>⎇ main · ✓ 0 problemas</span>
                        <span>JavaScript</span>
                    </div>
                </div>
            </aside>
        </section>
    )
}