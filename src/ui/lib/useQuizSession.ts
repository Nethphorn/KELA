import { useState } from 'react'

import {
  advance,
  createSession,
  currentQuestion,
  isCorrect,
  isFinished,
  toResult,
  type QuizSession,
} from '@/domain/quiz'
import type { LessonQuiz, QuizQuestion } from '@/domain/types-quiz'

const QUESTIONS_PER_SESSION = 10

export interface QuizController {
  readonly question: QuizQuestion | undefined
  readonly selected: string | null
  readonly finished: boolean
  readonly total: number
  readonly correct: number
  readonly progress: number
  readonly isLast: boolean
  readonly select: (choice: string) => void
  readonly next: () => void
  readonly restart: () => void
}

type QuizActions = Pick<QuizController, 'select' | 'next' | 'restart'>

function progressPercent(index: number, total: number): number {
  if (total === 0) {
    return 0
  }
  return Math.round((index / total) * 100)
}

function startSession(lesson: LessonQuiz): QuizSession {
  return createSession(lesson.questions, QUESTIONS_PER_SESSION)
}

function advanceSession(
  session: QuizSession,
  selected: string | null,
): QuizSession {
  const question = currentQuestion(session)
  if (question === undefined) {
    return session
  }
  return advance(session, isCorrect(question, selected ?? ''))
}

function buildController(
  session: QuizSession,
  selected: string | null,
  actions: QuizActions,
): QuizController {
  const result = toResult(session)
  return {
    question: currentQuestion(session),
    selected,
    finished: isFinished(session),
    total: result.total,
    correct: result.correct,
    progress: progressPercent(session.index, result.total),
    isLast: session.index + 1 >= result.total,
    select: actions.select,
    next: actions.next,
    restart: actions.restart,
  }
}

export function useQuizSession(lesson: LessonQuiz): QuizController {
  const [session, setSession] = useState<QuizSession>(() =>
    startSession(lesson),
  )
  const [selected, setSelected] = useState<string | null>(null)

  const next = () => {
    setSession(advanceSession(session, selected))
    setSelected(null)
  }

  const restart = () => {
    setSession(startSession(lesson))
    setSelected(null)
  }

  return buildController(session, selected, {
    select: (choice: string) => {
      setSelected(choice)
    },
    next,
    restart,
  })
}
