import type { ReactNode } from 'react'

import { GalleryStrip } from './GalleryStrip'
import { LessonMeta } from './LessonMeta'
import { QuizArena } from './QuizArena'
import { QuizResult } from './QuizResult'
import { TutorCard } from './TutorCard'
import type { LessonQuiz } from '@/domain/types-quiz'
import { useQuizSession, type QuizController } from '@/ui/lib/useQuizSession'
import { useTextToSpeech } from '@/ui/lib/useTextToSpeech'

const IDLE_SPEECH_KM = 'សាកគិតមើល! ជ្រើសរើសចម្លើយដែលត្រឹមត្រូវ។'
const IDLE_SPEECH_EN = 'Pick the answer you think is correct!'

interface QuizShellProps {
  readonly children: ReactNode
  readonly progress: number
  readonly speechKm: string
  readonly speechEn: string
  readonly onReadAloud: () => void
}

function QuizShell({
  children,
  progress,
  speechKm,
  speechEn,
  onReadAloud,
}: QuizShellProps) {
  return (
    <main className="flex flex-1 flex-col px-gutter-mobile pb-space-xl pt-16">
      <LessonMeta progress={progress} />
      {children}
      <TutorCard
        onHint={onReadAloud}
        onReadAloud={onReadAloud}
        speechEn={speechEn}
        speechKm={speechKm}
      />
      <GalleryStrip />
    </main>
  )
}

interface StageProps {
  readonly quiz: QuizController
  readonly speechText: string
  readonly onReadAloud: () => void
}

function QuizPlaying({ quiz, speechText, onReadAloud }: StageProps) {
  if (quiz.question === undefined) {
    return null
  }
  return (
    <QuizShell
      onReadAloud={onReadAloud}
      progress={quiz.progress}
      speechEn={IDLE_SPEECH_EN}
      speechKm={speechText}
    >
      <QuizArena
        isLast={quiz.isLast}
        onNext={quiz.next}
        onSelect={quiz.select}
        question={quiz.question}
        selected={quiz.selected}
      />
    </QuizShell>
  )
}

function QuizDone({ quiz, speechText, onReadAloud }: StageProps) {
  return (
    <QuizShell
      onReadAloud={onReadAloud}
      progress={quiz.progress}
      speechEn={IDLE_SPEECH_EN}
      speechKm={speechText}
    >
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
    return (
      <QuizDone onReadAloud={readCurrent} quiz={quiz} speechText={speechText} />
    )
  }
  return (
    <QuizPlaying
      onReadAloud={readCurrent}
      quiz={quiz}
      speechText={speechText}
    />
  )
}
