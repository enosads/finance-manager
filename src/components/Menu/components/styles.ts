import styled from 'styled-components'

export const MenuItemContainer = styled.li`
  display: flex;

  a {
    text-decoration: none;
    color: ${(props) => props.theme['gray-500']};
    padding: 1rem 2rem;
    width: 100%;
    transition: all 0.2s ease-in-out;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;

    &.active {
      background-color: ${(props) => props.theme['gray-600']};
      color: ${(props) => props.theme['gray-100']};
    }

    &:hover:not(.active) {
      background-color: ${(props) => props.theme['gray-700']};
      color: ${(props) => props.theme['gray-100']};
    }
  }
`
