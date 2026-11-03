export interface QuizQuestion {
  readonly id: string
  readonly prompt: string
  readonly choices: readonly string[]
  readonly answer: string
  readonly image: string | null
  readonly audioText: string | null
}

export interface LessonQuiz {
  readonly lessonId: number
  readonly title: string
  readonly subject: string
  readonly questions: readonly QuizQuestion[]
}

export interface QuizResult {
  readonly total: number
  readonly correct: number
}
