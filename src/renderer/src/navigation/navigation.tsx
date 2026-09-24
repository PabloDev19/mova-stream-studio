import { DashboardLayout } from '@renderer/layouts/DashboardLayout'
import { Comandos } from '@renderer/pages/comandos/Comandos'
import { Inicio } from '@renderer/pages/inicio/Inicio'
import { Loading } from '@renderer/pages/loading/Loading'
import { createBrowserRouter } from 'react-router'
export const routerNavigation = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Loading />
      }
    ]
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Inicio />
      },
      {
        path: 'commands',
        element: <Comandos />
      }
    ]
  }
])
