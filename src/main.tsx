import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import './styles/tokens.css'
import './styles/global.css'
import './styles/animations.css'
import './styles/header.css'
import './styles/hero.css'
import './styles/problem.css'
import './styles/process.css'
import './styles/why.css'
import './styles/closing.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)