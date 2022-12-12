import { BudgetsContainer } from './styles'
import { BudgetTile } from './components/BudgetTile'
import { FaPlus } from 'react-icons/all'
import { CreateBudgetModal } from './components/CreateBudgetModal'
import { useState } from 'react'

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

export function Budgets() {
  const [isCreateBudgetModalOpen, setIsCreateBudgetModalOpen] = useState(false)
  const budgetsFromLocalStorage = localStorage.getItem('budgets')
    ? JSON.parse(localStorage.getItem('budgets') as string)
    : []
  console.log('budgetsFromLocalStorage', budgetsFromLocalStorage)

  const handleCloseCreateBudgetModal = () => {
    setIsCreateBudgetModalOpen(false)
  }

  const handleOpenCreateBudgetModal = () => {
    setIsCreateBudgetModalOpen(true)
  }

  return (
    <BudgetsContainer>
      <header>
        <h1>Orçamentos</h1>
        <button type="button" onClick={handleOpenCreateBudgetModal}>
          <FaPlus />
          Criar orçamento
        </button>
      </header>
      <div>
        {budgetsFromLocalStorage.map((budget: BudgetData) => (
          <BudgetTile
            key={budget.id}
            budget={budget}
            allBudgets={budgetsFromLocalStorage}
          />
        ))}
      </div>
      {isCreateBudgetModalOpen && (
        <CreateBudgetModal
          onRequestClose={handleCloseCreateBudgetModal}
          budgets={budgetsFromLocalStorage}
        />
      )}
    </BudgetsContainer>
  )
}
