import './styles/main.css'

// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { routerNavigation } from './navigation/navigation'

createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={routerNavigation} />
  </>
)
