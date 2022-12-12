import { FaMinus, FaPlus, FaTimes } from 'react-icons/all'
import {
  ButtonAddCategory,
  ButtonsContainer,
  CancelButton,
  CategoryContainer,
  Container,
  DateInput,
  DateInputsContainer,
  Overlay,
  StepOneForm,
  StepTwoForm,
  SubmitButton,
} from './styles'
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
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

interface CreateBudgetModalProps {
  onRequestClose: () => void
  budgets: BudgetData[]
}

export function CreateBudgetModal({
  onRequestClose,
  budgets,
}: CreateBudgetModalProps) {
  const [step, setStep] = useState<number>(1)
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [amount, setAmount] = useState<string>('')
  const [initialDate, setInitialDate] = useState<string>('')
  const [finalDate, setFinalDate] = useState<string>('')
  const [categories, setCategories] = useState<CategoryData[]>([])
  const [totalAmountCategories, setTotalAmountCategories] = useState(0)

  useEffect(() => {
    function onEscapeKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        handleModalClose()
      }
    }

    window.addEventListener('keydown', onEscapeKey)

    return () => window.removeEventListener('keydown', onEscapeKey)
  }, [])

  useEffect(() => {
    if (categories.length === 0) {
      setCategories([createNewBlankCategory(), createNewBlankCategory()])
    }

    const totalAmount = categories.reduce((acc, category) => {
      return acc + category.amount
    }, 0)
    setTotalAmountCategories(totalAmount)
  }, [categories])
  const handleModalClose = () => {
    onRequestClose()
  }

  const handleNextStep = () => {
    switch (step) {
      case 1:
        setStep(step + 1)
        break
      case 2:
        const newBudget = {
          id: uuidv4(),
          title,
          description,
          amount: Number(amount),
          initialDate,
          finalDate,
          categories,
        }
        budgets.push(newBudget)
        localStorage.setItem('budgets', JSON.stringify(budgets))
        handleModalClose()
        break
    }
  }

  const handlePreviousStep = () => {
    setStep(step - 1)
  }

  const createNewBlankCategory = () => {
    return {
      id: uuidv4(),
      name: '',
      amount: 0,
    }
  }

  const handleAddCategory = () => {
    setCategories([...categories, createNewBlankCategory()])
  }

  const handleRemoveCategory = (id: string) => {
    setCategories(categories.filter((category) => category.id !== id))
  }
  const buildCategories = () => {
    return categories.map((category) => (
      <CategoryContainer key={category.id}>
        <input
          type="text"
          id="category"
          placeholder="Categoria"
          value={category.name}
          onChange={(e) => {
            const newCategories = categories.map((c) => {
              if (c.id === category.id) {
                return {
                  ...c,
                  name: e.target.value,
                }
              }
              return c
            })
            setCategories(newCategories)
          }}
        />
        <input
          type="text"
          id="amount"
          placeholder="Valor"
          value={category.amount}
          onChange={(e) => {
            const newCategories = categories.map((c) => {
              if (c.id === category.id) {
                return {
                  ...c,
                  amount: Number(e.target.value),
                }
              }
              return c
            })
            setCategories(newCategories)
          }}
        />
        <button type="button" onClick={() => handleRemoveCategory(category.id)}>
          <FaMinus />
        </button>
      </CategoryContainer>
    ))
  }

  const buildSteps = () => {
    switch (step) {
      case 1:
        return (
          <StepOneForm>
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              cols={30}
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor="amount">Valor</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value)
              }}
            />
            <DateInputsContainer>
              <DateInput>
                <label htmlFor="initialDate">Data inicial</label>
                <input
                  type="date"
                  id="initialDate"
                  value={initialDate}
                  onChange={(e) => setInitialDate(e.target.value)}
                />
              </DateInput>
              <DateInput>
                <label htmlFor="finalDate">Data final</label>
                <input
                  type="date"
                  id="finalDate"
                  value={finalDate}
                  onChange={(e) => setFinalDate(e.target.value)}
                />
              </DateInput>
            </DateInputsContainer>
            <ButtonsContainer>
              <CancelButton type="button" onClick={handleModalClose}>
                Cancelar
              </CancelButton>
              <SubmitButton type="submit" onClick={handleNextStep}>
                Continuar
              </SubmitButton>
            </ButtonsContainer>
          </StepOneForm>
        )
      case 2:
        return (
          <StepTwoForm>
            <span>Distribua o valor do orçamento entre as categorias</span>
            <p>
              {toBrazilianCurrency(Number(amount) - totalAmountCategories)} de{' '}
              {toBrazilianCurrency(Number(amount))} disponíveis para distribuir
            </p>
            {buildCategories()}
            <ButtonAddCategory type="button" onClick={handleAddCategory}>
              <FaPlus />
            </ButtonAddCategory>
            <ButtonsContainer>
              <CancelButton type="button" onClick={handlePreviousStep}>
                Voltar
              </CancelButton>
              <SubmitButton type="submit" onClick={handleNextStep}>
                Criar orçamento
              </SubmitButton>
            </ButtonsContainer>
          </StepTwoForm>
        )
    }
  }

  return (
    <Overlay>
      <Container>
        <header>
          <h1>Criar orçamento</h1>
          <button type="button" onClick={handleModalClose}>
            <FaTimes />
          </button>
        </header>
        {buildSteps()}
      </Container>
    </Overlay>
  )
}
