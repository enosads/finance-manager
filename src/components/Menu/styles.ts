import styled from 'styled-components'

export const MenuContainer = styled.nav`
  display: flex;
  width: 280px;
  background-color: ${(props) => props.theme['gray-800']};
  height: 100vh;
  flex-direction: column;

  h1 {
    font-size: 1.25rem;
    padding: 2rem;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
  }
`
