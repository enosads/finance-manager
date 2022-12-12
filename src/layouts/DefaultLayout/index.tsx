import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'
import { Menu } from '../../components/Menu'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Menu />
      <Outlet />
    </LayoutContainer>
  )
}
