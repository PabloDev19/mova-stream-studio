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
  }
])
