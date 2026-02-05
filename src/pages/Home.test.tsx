import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import { Home } from './Home'

describe('Home Page', () => {
  it('should create a task when form is submitted', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    const input = screen.getByPlaceholderText('Título')
    const button = screen.getByText('Criar task')

    fireEvent.change(input, { target: { value: 'Minha task' } })
    fireEvent.click(button)

    expect(screen.getByText('Tarefa criada com sucesso.')).toBeInTheDocument()
  })

  it('should disable button when title is empty', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    const button = screen.getByText('Criar task')
    expect(button).toBeDisabled()
  })
})