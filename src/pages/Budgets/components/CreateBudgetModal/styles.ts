import styled from 'styled-components'

export const Overlay = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  justify-content: center;
  align-items: center;
  z-index: 100;
  overflow-y: auto;
  backdrop-filter: blur(3px);
`
export const Container = styled.div`
  background-color: ${({ theme }) => theme['gray-600']};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 480px;
  padding: 20px;
  z-index: 100;

  header {
    h1 {
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 20px;
    }

    button {
      background: none;
      border: none;
      color: ${({ theme }) => theme['gray-300']};
      font-size: 20px;
      font-weight: 500;
      position: absolute;
      right: 20px;
      top: 20px;
      cursor: pointer;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`

export const StepOneForm = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  input,
  textarea {
    background-color: ${({ theme }) => theme['gray-700']};
    border: none;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme['gray-300']};
    font-size: 16px;
    font-weight: 500;
    padding: 0 20px;
    margin-bottom: 20px;

    &::placeholder {
      color: ${({ theme }) => theme['gray-300']};
    }
  }
  input {
    height: 40px;
  }

  textarea {
    padding: 20px;
    resize: none;
    overflow-y: auto;
  }
`

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme['purple-500']};
  border: none;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme['gray-100']};
  font-size: 16px;
  font-weight: 500;
  height: 40px;
  margin-top: 20px;
  cursor: pointer;
  transition: filter 0.2s;
  width: 48%;

  &:hover {
    filter: brightness(0.8);
  }
`

export const CancelButton = styled.button`
  background-color: ${({ theme }) => theme['gray-700']};
  border: none;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme['gray-300']};
  font-size: 16px;
  font-weight: 500;
  height: 40px;
  margin-top: 20px;
  cursor: pointer;
  transition: filter 0.2s;
  width: 48%;

  &:hover {
    filter: brightness(0.8);
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

export const DateInputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const DateInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
`

export const StepTwoForm = styled.form`
  display: flex;
  flex-direction: column;

  span {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  p {
    color: ${({ theme }) => theme['gray-300']};
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 20px;
  }
`

export const CategoryContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  align-items: center;

  input {
    background-color: ${({ theme }) => theme['gray-700']};
    border: none;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme['gray-300']};
    font-size: 16px;
    font-weight: 500;
    padding: 0 20px;
    height: 40px;
    width: 43%;

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme['gray-300']};
    border: none;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme['gray-700']};
    height: 28px;
    width: 28px;
    cursor: pointer;
  }
`

export const ButtonAddCategory = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme['purple-500']};
  border: none;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme['gray-100']};
  height: 28px;
  width: 28px;
  cursor: pointer;
  transition: filter 0.2s;
  margin-bottom: 20px;
  margin-left: auto;
`
