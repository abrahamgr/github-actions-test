import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('render App', () => {
  render(<App />)
  expect(screen.getByText('Vite + React')).toBeInTheDocument()
})

test('click count', async () => {
  render(<App />)
  expect(screen.getByText('count is 0')).toBeInTheDocument()
  await userEvent.click(screen.getByRole('button', { name: /count is*/ }))
  expect(screen.getByText('count is 1')).toBeInTheDocument()
})
