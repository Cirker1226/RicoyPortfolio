import { createRoot } from 'react-dom/client'
import '@fontsource/titillium-web/600.css'
import '@fontsource/titillium-web/900.css'
import './css/global.css'
import Header from './components/Header.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Header />
  </>
)