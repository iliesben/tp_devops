import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Square } from './Square'

test('renders a button with X text', () => {
  const { getByRole } = render(<Square />)
  const button = getByRole('button')
  expect(button).toHaveTextContent('X')
  expect(button).toBeInTheDocument()
})
