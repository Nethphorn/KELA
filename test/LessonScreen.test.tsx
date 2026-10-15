import { describe, expect, it } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

import { LessonScreen } from '../src/ui/screens/LessonScreen'

function renderLesson(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route element={<LessonScreen />} path="/lesson/:id" />
      </Routes>
    </MemoryRouter>,
  )
}

describe('LessonScreen', () => {
  it('renders the lesson 2 quiz from data', () => {
    renderLesson('/lesson/2')

    expect(screen.getByText(/Choose the answer/)).toBeTruthy()
  })

  it('falls back to the hardcoded lesson for unknown ids', () => {
    renderLesson('/lesson/99')

    expect(screen.getByText('Lesson Arena')).toBeTruthy()
  })
})
