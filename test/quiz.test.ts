import { describe, expect, it } from '@jest/globals'

import {
  advance,
  createSession,
  currentQuestion,
  isCorrect,
  isFinished,
  toResult,
} from '../src/domain/quiz'
import type { QuizQuestion } from '../src/domain/types-quiz'

const ALWAYS_ZERO = (): number => 0

function makeQuestion(index: number): QuizQuestion {
  return {
    id: `q${String(index)}`,
    prompt: `prompt ${String(index)}`,
    choices: ['a', 'b', 'c'],
    answer: 'a',
    image: null,
    audioText: null,
  }
}

function makeQuestions(count: number): QuizQuestion[] {
  const questions: QuizQuestion[] = []
  for (let i = 0; i < count; i += 1) {
    questions.push(makeQuestion(i))
  }
  return questions
}

describe('createSession', () => {
  it('caps the session at the requested number of questions', () => {
    const session = createSession(makeQuestions(28), 10, ALWAYS_ZERO)
    expect(session.questions).toHaveLength(10)
  })

  it('never repeats a question', () => {
    const session = createSession(makeQuestions(28), 10, ALWAYS_ZERO)
    const ids = new Set(session.questions.map((question) => question.id))
    expect(ids.size).toBe(10)
  })

  it('keeps the answer among the shuffled choices', () => {
    const session = createSession(makeQuestions(3), 3, ALWAYS_ZERO)
    for (const question of session.questions) {
      expect(question.choices).toContain(question.answer)
    }
  })
})

describe('answering', () => {
  it('checks the selected choice against the answer', () => {
    const question = makeQuestion(0)
    expect(isCorrect(question, 'a')).toBe(true)
    expect(isCorrect(question, 'b')).toBe(false)
  })

  it('advances and scores correct answers', () => {
    let session = createSession(makeQuestions(5), 5, ALWAYS_ZERO)
    const question = currentQuestion(session)
    if (question === undefined) {
      throw new Error('expected a question')
    }
    session = advance(session, isCorrect(question, 'a'))
    expect(session.index).toBe(1)
    expect(session.correct).toBe(1)
    expect(isFinished(session)).toBe(false)
  })

  it('reports a finished session and final result', () => {
    let session = createSession(makeQuestions(2), 2, ALWAYS_ZERO)
    session = advance(session, true)
    session = advance(session, false)
    expect(isFinished(session)).toBe(true)
    expect(toResult(session)).toEqual({ total: 2, correct: 1 })
  })
})
