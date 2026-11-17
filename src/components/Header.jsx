import { useState } from 'react'
import styles from '../css/Header.module.css'

export default function Header() {
  // guarda qual seção está marcada no menu
  const [ativa, setAtiva] = useState('inicio')

  // devolve a classe "ativo" só para o link da seção marcada
  function classe(id) {
    if (ativa === id) {
      return styles.ativo
    }
    return undefined
  }

  return (
    <header className={styles.topo}>
      <a href="#inicio" className={styles.logo} aria-label="Matheus Ricoy — início">
        <svg className={styles.logoIcone} viewBox="0 0 24 24" aria-hidden="true">
          <polyline points="7 7 2 12 7 17" />
          <polyline points="17 7 22 12 17 17" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
        <span className={styles.logoTexto}>MATHEUS<b>RICOY</b></span>
      </a>

      <nav className={styles.menu} id="menu">
        <a href="#inicio" className={classe('inicio')} onClick={() => setAtiva('inicio')}>Grid</a>
        <a href="#piloto" className={classe('piloto')} onClick={() => setAtiva('piloto')}>Piloto</a>
        <a href="#hobbies" className={classe('hobbies')} onClick={() => setAtiva('hobbies')}>Hobbies</a>
        <a href="#trofeus" className={classe('trofeus')} onClick={() => setAtiva('trofeus')}>Troféus</a>
        <a href="#garagem" className={classe('garagem')} onClick={() => setAtiva('garagem')}>Garagem</a>
        <a href="#equipes" className={classe('equipes')} onClick={() => setAtiva('equipes')}>Equipes</a>
        <a href="#temporada" className={classe('temporada')} onClick={() => setAtiva('temporada')}>Temporada</a>
        <a href="#radio" className={classe('radio')} onClick={() => setAtiva('radio')}>Rádio</a>
      </nav>
    </header>
  )
}