import { useState } from 'react'

import { ExerciseArena } from './ExerciseArena'
import { GalleryStrip } from './GalleryStrip'
import { LessonMeta } from './LessonMeta'
import { TutorCard } from './TutorCard'
import { LESSON_CONTENT } from '@/domain/content/lesson'

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

export function HardcodedLesson() {
  const [solved, setSolved] = useState(false)
  const [hintShown, setHintShown] = useState(false)
  const speech = resolveSpeech(solved, hintShown)

  return (
    <main className="flex flex-1 flex-col px-gutter-mobile pb-space-xl pt-16">
      <LessonMeta />
      <ExerciseArena
        onSolve={() => {
          setSolved(true)
        }}
        solved={solved}
      />
      <TutorCard
        onHint={() => {
          setHintShown(true)
        }}
        speechEn={speech.en}
        speechKm={speech.km}
      />
      <GalleryStrip />
    </main>
  )
}
