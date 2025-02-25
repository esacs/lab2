import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppCounter } from './components/AppCounter.jsx'
import { SimpleForm } from './components/SimpleForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SimpleForm></SimpleForm>
  </StrictMode>,
)
