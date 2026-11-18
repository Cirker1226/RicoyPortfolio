import { createRoot } from 'react-dom/client'
import '@fontsource/titillium-web/600.css'
import '@fontsource/titillium-web/900.css'
import Header from './components/Header.jsx'
import Grid from './components/Grid.jsx'
import Piloto from './components/Piloto.jsx'
import './css/global.css'

createRoot(document.getElementById('root')).render(
  <>
    <Header />
      <Grid />
      <Piloto />
  </>
)