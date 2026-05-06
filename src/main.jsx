import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/globals.css'

const rootEl = document.getElementById('root')

if (rootEl) {
  rootEl.innerHTML = `
    <div style="padding:24px;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;">
      <div style="font-weight:700;margin-bottom:8px;">Loading portfolio...</div>
      <div id="runtime-error" style="color:#b91c1c;font-weight:600;"></div>
    </div>
  `
}

function showRuntimeError(message) {
  const el = document.getElementById('runtime-error')
  if (el) el.textContent = message
}

window.addEventListener('error', (event) => {
  showRuntimeError(event?.message ? String(event.message) : 'Unknown runtime error')
})

window.addEventListener('unhandledrejection', (event) => {
  showRuntimeError(event?.reason ? String(event.reason) : 'Unknown unhandled error')
})

try {
  if (rootEl) {
    ReactDOM.createRoot(rootEl).render(
      <React.StrictMode>
        <HashRouter>
          <App />
        </HashRouter>
      </React.StrictMode>,
    )
  }
} catch (err) {
  showRuntimeError(err?.message ? String(err.message) : 'Render failed')
  throw err
}

