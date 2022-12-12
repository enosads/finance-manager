import { BudgetTileContainer, CategoriesList, CategoryListItem } from './styles'
import { formatDate } from '../../../../utils/date'
import { toBrazilianCurrency } from '../../../../utils/number'

interface CategoryData {
  id: string
  name: string
  amount: number
}

interface BudgetData {
  id: string
  title: string
  description: string
  amount: number
  initialDate: string
  finalDate: string
  categories: CategoryData[]
}

interface BudgetTileProps {
  budget: BudgetData
  allBudgets: BudgetData[]
}

export function BudgetTile({ budget, allBudgets }: BudgetTileProps) {
  return (
    <BudgetTileContainer>
      <header>
        <strong>{budget.title}</strong>
        <strong>{toBrazilianCurrency(budget.amount)}</strong>
      </header>
      <span className="budget-tile__period">
        De {formatDate(budget.initialDate)} até {formatDate(budget.finalDate)}
      </span>
      {budget.description && <p>{budget.description}</p>}
      <CategoriesList>
        {budget.categories.map((category) => (
          <CategoryListItem key={category.id}>
            <span>{category.name}</span>
            <span>{toBrazilianCurrency(category.amount)}</span>
          </CategoryListItem>
        ))}
      </CategoriesList>
    </BudgetTileContainer>
  )
}
