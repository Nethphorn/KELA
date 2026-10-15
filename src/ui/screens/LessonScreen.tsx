import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { ExerciseArena } from './lesson/ExerciseArena'
import { GalleryStrip } from './lesson/GalleryStrip'
import { LessonMeta } from './lesson/LessonMeta'
import { TutorCard } from './lesson/TutorCard'
import { LESSON_CONTENT } from '@/domain/content/lesson'
import { LessonHeader } from '@/ui/layout/LessonHeader'

const SOLVED_SPEECH_KM = '«ពូកែណាស់! ១ (ត្រាទុក) + ២ + ១ = ៤។ ចម្លើយសរុបគឺ ៤២!»'
const SOLVED_SPEECH_EN = 'Now sum the tens: 1 (carry) + 2 + 1 = 4!'

interface Speech {
  readonly km: string
  readonly en: string
}

function resolveSpeech(solved: boolean, hintShown: boolean): Speech {
  if (solved) {
    return { km: SOLVED_SPEECH_KM, en: SOLVED_SPEECH_EN }
  }
  if (hintShown) {
    return {
      km: LESSON_CONTENT.tutor.hintKm,
      en: LESSON_CONTENT.tutor.speechEn,
    }
  }
  return {
    km: LESSON_CONTENT.tutor.speechKm,
    en: LESSON_CONTENT.tutor.speechEn,
  }
}

interface LessonArenaProps {
  readonly solved: boolean
  readonly hintShown: boolean
  readonly onSolve: () => void
  readonly onHint: () => void
}

function LessonArena({ solved, hintShown, onSolve, onHint }: LessonArenaProps) {
  const speech = resolveSpeech(solved, hintShown)

  return (
    <main className="flex flex-1 flex-col px-gutter-mobile pb-space-xl pt-16">
      <LessonMeta />
      <ExerciseArena onSolve={onSolve} solved={solved} />
      <TutorCard onHint={onHint} speechEn={speech.en} speechKm={speech.km} />
      <GalleryStrip />
    </main>
  )
}

export function LessonScreen() {
  const { id } = useParams()
  const [solved, setSolved] = useState(false)
  const [hintShown, setHintShown] = useState(false)

  return (
    <div className="flex min-h-dvh flex-col" data-lesson-id={id}>
      <LessonHeader />
      <LessonArena
        hintShown={hintShown}
        onHint={() => {
          setHintShown(true)
        }}
        onSolve={() => {
          setSolved(true)
        }}
        solved={solved}
      />
    </div>
  )
}
