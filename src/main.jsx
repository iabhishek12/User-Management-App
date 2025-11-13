import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import MyRoutes from './Router/MyRoutes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={MyRoutes}>
    <App />
    </RouterProvider>
  </StrictMode>,
)
