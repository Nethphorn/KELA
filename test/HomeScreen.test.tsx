import { describe, expect, it } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { HomeScreen } from '../src/ui/screens/HomeScreen'

describe('HomeScreen', () => {
  it('renders the greeting and level card', () => {
    render(
      <MemoryRouter>
        <HomeScreen />
      </MemoryRouter>,
    )

    expect(screen.getByText('Ready to discover math magic today?')).toBeTruthy()
    expect(screen.getByText('Lv. 4 Math Explorer')).toBeTruthy()
  })
})
