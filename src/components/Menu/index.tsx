import { MenuContainer } from './styles'
import { MenuItem } from './components/MenuItem'

export function Menu() {
  return (
    <MenuContainer>
      <h1>Finance Manager</h1>
      <ul>
        <MenuItem to="" label="Resumo" title={'Finance Manager'} />
        <MenuItem to="budgets" label="Orçamentos" title={'Orçamentos'} />
        <MenuItem to="assets" label="Ativos" title={'Ativos'} />
      </ul>
    </MenuContainer>
  )
}
