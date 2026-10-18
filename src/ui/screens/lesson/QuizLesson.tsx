import type { ReactNode } from 'react'

import { LessonMeta } from './LessonMeta'
import { QuizArena } from './QuizArena'
import { QuizResult } from './QuizResult'
import type { LessonQuiz } from '@/domain/types-quiz'
import { useQuizSession, type QuizController } from '@/ui/lib/useQuizSession'
import { useTextToSpeech } from '@/ui/lib/useTextToSpeech'

const IDLE_SPEECH_KM = 'សាកគិតមើល! ជ្រើសរើសចម្លើយដែលត្រឹមត្រូវ។'

interface QuizShellProps {
  readonly children: ReactNode
  readonly progress: number
}

function QuizShell({ children, progress }: QuizShellProps) {
  return (
    <main className="flex flex-1 flex-col px-gutter-mobile pb-space-xl pt-16">
      <LessonMeta progress={progress} />
      {children}
    </main>
  )
}

interface PlayingProps {
  readonly quiz: QuizController
  readonly onReadAloud: () => void
}

function QuizPlaying({ quiz, onReadAloud }: PlayingProps) {
  if (quiz.question === undefined) {
    return null
  }
  return (
    <QuizShell progress={quiz.progress}>
      <QuizArena
        isLast={quiz.isLast}
        onHint={onReadAloud}
        onNext={quiz.next}
        onReadAloud={onReadAloud}
        onSelect={quiz.select}
        question={quiz.question}
        selected={quiz.selected}
      />
    </QuizShell>
  )
}

function QuizDone({ quiz }: { readonly quiz: QuizController }) {
  return (
    <QuizShell progress={quiz.progress}>
      <QuizResult
        correct={quiz.correct}
        onReplay={quiz.restart}
        total={quiz.total}
      />
    </QuizShell>
  )
}

interface QuizLessonProps {
  readonly lesson: LessonQuiz
}

export function QuizLesson({ lesson }: QuizLessonProps) {
  const quiz = useQuizSession(lesson)
  const readAloud = useTextToSpeech()
  const speechText = quiz.question?.prompt ?? IDLE_SPEECH_KM
  const readCurrent = () => {
    readAloud(speechText)
  }

  if (quiz.finished) {
    return <QuizDone quiz={quiz} />
  }
  return <QuizPlaying onReadAloud={readCurrent} quiz={quiz} />
}
