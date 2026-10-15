import rawLesson2 from '../../data/lessons/lesson_2.json'
import type { LessonQuiz, QuizQuestion } from '../types-quiz'

function asRecord(value: unknown): Record<string, unknown> | null {
  if (typeof value === 'object' && value !== null) {
    return value as Record<string, unknown>
  }
  return null
}

function asString(value: unknown): string | null {
  return typeof value === 'string' ? value : null
}

function requireField(
  record: Record<string, unknown>,
  key: string,
  label: string,
): string {
  const value = asString(record[key])
  if (value === null) {
    throw new Error(`${label}: missing ${key}`)
  }
  return value
}

function parseChoices(value: unknown, id: string): string[] {
  if (!Array.isArray(value)) {
    throw new Error(`lesson question "${id}": choices must be an array`)
  }
  const list = value as unknown[]
  return list.map((item) => {
    const choice = asString(item)
    if (choice === null) {
      throw new Error(`lesson question "${id}": every choice must be a string`)
    }
    return choice
  })
}

function parseQuestion(value: unknown, index: number): QuizQuestion {
  const record = asRecord(value)
  if (record === null) {
    throw new Error(`lesson question #${String(index)}: must be an object`)
  }
  const id = asString(record.id)
  if (id === null) {
    throw new Error(`lesson question #${String(index)}: missing id`)
  }
  const label = `lesson question "${id}"`
  const prompt = requireField(record, 'prompt', label)
  const answer = requireField(record, 'answer', label)
  const choices = parseChoices(record.choices, id)
  if (choices.length < 2) {
    throw new Error(`${label}: needs at least 2 choices`)
  }
  if (!choices.includes(answer)) {
    throw new Error(`${label}: answer is not among the choices`)
  }
  return {
    id,
    prompt,
    choices,
    answer,
    image: asString(record.image),
    audioText: asString(record.audioText),
  }
}

function assertUniqueIds(questions: readonly QuizQuestion[]): void {
  const seen = new Set<string>()
  for (const question of questions) {
    if (seen.has(question.id)) {
      throw new Error(`lesson: duplicate question id "${question.id}"`)
    }
    seen.add(question.id)
  }
}

function parseLesson(value: unknown): LessonQuiz {
  const record = asRecord(value)
  if (record === null) {
    throw new Error('lesson: must be an object')
  }
  const lessonId = typeof record.lessonId === 'number' ? record.lessonId : null
  if (lessonId === null) {
    throw new Error('lesson: missing lessonId')
  }
  const title = requireField(record, 'title', 'lesson')
  const subject = requireField(record, 'subject', 'lesson')
  const rawQuestions = record.questions
  if (!Array.isArray(rawQuestions)) {
    throw new Error('lesson: questions must be an array')
  }
  const questions = (rawQuestions as unknown[]).map((item, index) =>
    parseQuestion(item, index),
  )
  assertUniqueIds(questions)
  return { lessonId, title, subject, questions }
}

const LESSONS: readonly LessonQuiz[] = [parseLesson(rawLesson2)]

export function getLessonQuiz(id: number): LessonQuiz | undefined {
  return LESSONS.find((lesson) => lesson.lessonId === id)
}
