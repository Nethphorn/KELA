import { describe, expect, it } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { LessonsScreen } from '../src/ui/screens/lessons/LessonsScreen'

function renderLessons() {
  return render(
    <MemoryRouter>
      <LessonsScreen />
    </MemoryRouter>,
  )
}

describe('LessonsScreen', () => {
  it('renders the lesson selection heading', () => {
    renderLessons()
    expect(screen.getByText(/Today's Quests/)).toBeTruthy()
  })

  it('renders the lesson catalog titles', () => {
    renderLessons()
    expect(screen.getByText('ចំនួន និងការរាប់')).toBeTruthy()
    expect(screen.getByText('ប្រភាគ')).toBeTruthy()
    expect(screen.getByText('វិធីបូក')).toBeTruthy()
  })

  it('marks playable lessons with a start hint', () => {
    renderLessons()
    expect(screen.getAllByText(/Tap to start lesson/)).toHaveLength(2)
  })
})
