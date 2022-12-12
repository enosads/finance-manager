import styled from 'styled-components'

export const BudgetTileContainer = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme['gray-500']};
  border-radius: 12px;
  padding: 2rem;
  background-color: ${(props) => props.theme['gray-700']};
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;

  header {
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-100']};
    font-size: 1.25rem;
  }

  .budget-tile__period {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-300']};
  }

  p {
    color: ${(props) => props.theme['gray-400']};
    margin-bottom: 1rem;
  }
`
export const CategoriesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  list-style: none;
`

export const CategoryListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1rem;
  font-weight: 500;
  gap: 0.5rem;
  width: 100%;
`
