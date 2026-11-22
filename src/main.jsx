import { createRoot } from 'react-dom/client'
import Header from './components/Header.jsx'
import Grid from './components/Grid.jsx'
import Piloto from './components/Piloto.jsx'
import Hobbies from './components/Hobbies.jsx'
import Trofeus from './components/Trofeus.jsx'
import Garagem from './components/Garagem.jsx'
import Equipes from './components/Equipes.jsx'
import Temporada from './components/Temporada.jsx'
import Radio from './components/Radio.jsx'
import '@fontsource/titillium-web/600.css'
import '@fontsource/titillium-web/900.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './css/global.css'

createRoot(document.getElementById('root')).render(
  <>
    <Header />
      <Grid />
      <Piloto />
      <Hobbies />
      <Trofeus />
      <Garagem />
      <Equipes />
      <Temporada />
    <Radio />
  </>
)