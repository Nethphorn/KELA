import type { QuizQuestion, QuizResult } from './types-quiz'

export interface QuizSession {
  readonly questions: readonly QuizQuestion[]
  readonly index: number
  readonly correct: number
}

function shuffle<T>(items: readonly T[], random: () => number): readonly T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1))
    const swap = copy[i]
    copy[i] = copy[j]
    copy[j] = swap
  }
  return copy
}

function prepare(question: QuizQuestion, random: () => number): QuizQuestion {
  return { ...question, choices: shuffle(question.choices, random) }
}

export function createSession(
  questions: readonly QuizQuestion[],
  count: number,
  random: () => number = Math.random,
): QuizSession {
  const picked = shuffle(questions, random).slice(0, count)
  return {
    questions: picked.map((question) => prepare(question, random)),
    index: 0,
    correct: 0,
  }
}

export function currentQuestion(
  session: QuizSession,
): QuizQuestion | undefined {
  return session.questions[session.index]
}

export function isCorrect(question: QuizQuestion, choice: string): boolean {
  return question.answer === choice
}

export function advance(
  session: QuizSession,
  wasCorrect: boolean,
): QuizSession {
  const score = wasCorrect ? session.correct + 1 : session.correct
  return { ...session, index: session.index + 1, correct: score }
}

export function isFinished(session: QuizSession): boolean {
  return session.index >= session.questions.length
}

export function toResult(session: QuizSession): QuizResult {
  return { total: session.questions.length, correct: session.correct }
}
