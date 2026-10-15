import { useParams } from 'react-router-dom'

import { HardcodedLesson } from './lesson/HardcodedLesson'
import { QuizLesson } from './lesson/QuizLesson'
import { getLessonQuiz } from '@/domain/content/lessons'
import { LessonHeader } from '@/ui/layout/LessonHeader'

export function LessonScreen() {
  const { id } = useParams()
  const lessonId = id === undefined ? Number.NaN : Number(id)
  const lesson = getLessonQuiz(lessonId)

  return (
    <div className="flex min-h-dvh flex-col" data-lesson-id={id}>
      <LessonHeader />
      {lesson === undefined ? (
        <HardcodedLesson />
      ) : (
        <QuizLesson lesson={lesson} />
      )}
    </div>
  )
}
