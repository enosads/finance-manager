import styled from 'styled-components'

export const BudgetsContainer = styled.div`
  display: flex;
  padding: 4rem;
  flex-direction: column;
  gap: 4rem;
  width: 100%;

  > header {
    display: flex;
    gap: 1rem;
    align-items: center;

    > button {
      display: flex;
      margin-left: auto;
      height: 2rem;
      border-radius: 0.5rem;
      border: 0;
      background: ${({ theme }) => theme['purple-300']};
      color: ${({ theme }) => theme.white};
      font-weight: 500;
      transition: filter 0.2s;
      cursor: pointer;
      gap: 0.5rem;
      line-height: 2rem;
      text-align: center;
      justify-content: center;
      padding: 0 1rem;
      white-space: nowrap;

      svg {
        height: 100%;
      }

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`
