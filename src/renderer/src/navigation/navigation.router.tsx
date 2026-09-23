import { DashboardLayout } from '@renderer/layouts/DashboardLayout'
import { Dashboard } from '@renderer/pages/dashboard/Dashboard'
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
        element: <Dashboard />
      }
    ]
  }
])
