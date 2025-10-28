import { render, screen } from '@testing-library/react'
import Hero from './Hero'
import { describe, it, expect } from 'vitest'

describe('Hero', () => {
  it('renders headline', () => {
    render(<Hero />)
    const heading = screen.getByText(/Building useful products/i)
    expect(heading).toBeTruthy()
  })
})
