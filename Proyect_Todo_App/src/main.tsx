import { createRoot } from 'react-dom/client'
import 'todomvc-app-css/index.css'
import App from './App.tsx'
import React from 'react'
import './index.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
