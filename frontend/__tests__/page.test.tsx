import { render, screen } from '@testing-library/react'
import Page from '../src/app/page'

test('renders page', () => {
  render(<Page />)
  expect(screen.getByText(/email/i)).toBeInTheDocument()
})

