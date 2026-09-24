import { Outlet } from 'react-router-dom'
import './layout.css'
import { AsideMenu } from './AsideMenu'

export const DashboardLayout = ({}) => {
  return (
    <section className="dashboard_layout">
      <AsideMenu />
      <article className="render_view">
        <Outlet />
      </article>
    </section>
  )
}
