import { describe, expect, it } from '@jest/globals'

import { getLessonQuiz } from '../src/domain/content/lessons'

describe('getLessonQuiz', () => {
  it('parses the lesson 2 fraction quiz from data', () => {
    const lesson = getLessonQuiz(2)
    expect(lesson?.lessonId).toBe(2)
    expect(lesson?.questions.length).toBeGreaterThan(0)
  })

  it('parses the lesson 3 addition quiz from data', () => {
    const lesson = getLessonQuiz(3)
    expect(lesson?.lessonId).toBe(3)
    expect(lesson?.questions).toHaveLength(5)
  })

  it('keeps every answer among its choices', () => {
    const lesson = getLessonQuiz(3)
    for (const question of lesson?.questions ?? []) {
      expect(question.choices).toContain(question.answer)
    }
  })

  it('returns undefined for an unregistered lesson', () => {
    expect(getLessonQuiz(99)).toBeUndefined()
  })
})
