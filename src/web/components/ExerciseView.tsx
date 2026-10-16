import { useState } from 'react'

import type { Exercise } from '../lessonContent'
import { optionTone, stageLabel, stagePill } from './exerciseCardTones'

type AnswerState = 'idle' | 'correct' | 'wrong'

const MASCOT: Record<AnswerState, { emoji: string; anim: string }> = {
  idle: { emoji: '🤖', anim: 'animate-float' },
  correct: { emoji: '🥳', anim: 'animate-pop-in' },
  wrong: { emoji: '🤔', anim: 'animate-wiggle' },
}

/** Derives the answer state from the current pick. */
function answerState(
  exercise: Exercise,
  picked: string | undefined,
): AnswerState {
  if (picked === undefined) {
    return 'idle'
  }
  return picked === exercise.expectedAnswer ? 'correct' : 'wrong'
}

interface OptionButtonProps {
  readonly exercise: Exercise
  readonly option: string
  readonly picked: string | undefined
  readonly onPick: (option: string) => void
}

/** A single option button. */
function OptionButton({
  exercise,
  option,
  picked,
  onPick,
}: OptionButtonProps): React.JSX.Element {
  const isAnswered = picked !== undefined
  const tone = optionTone({
    isAnswered,
    isCorrectOption: option === exercise.expectedAnswer,
    isPicked: option === picked,
  })
  const wrong = isAnswered && option === picked && !tone.includes('green')

  return (
    <button
      type="button"
      disabled={isAnswered && picked === exercise.expectedAnswer}
      onClick={() => {
        onPick(option)
      }}
      className={`rounded-xl px-4 py-3 text-lg font-bold transition ${tone} ${wrong ? 'animate-shake' : ''}`}
    >
      {option}
    </button>
  )
}

/** The option grid. */
function ExerciseOptions({
  exercise,
  picked,
  onPick,
}: {
  readonly exercise: Exercise
  readonly picked: string | undefined
  readonly onPick: (option: string) => void
}): React.JSX.Element {
  return (
    <div className="mt-4 grid grid-cols-1 gap-3">
      {exercise.options.map((option) => (
        <OptionButton
          key={option}
          exercise={exercise}
          option={option}
          picked={picked}
          onPick={onPick}
        />
      ))}
    </div>
  )
}

/** Toggleable two-level hints. */
function ExerciseHints({
  exercise,
}: {
  readonly exercise: Exercise
}): React.JSX.Element {
  const [showHint, setShowHint] = useState(false)
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setShowHint((value) => !value)
        }}
        className="mt-4 rounded-full bg-brand-blue-soft px-4 py-1.5 text-sm font-bold text-brand-blue"
      >
        {showHint ? 'Hide hint' : '💡 Need a hint?'}
      </button>
      {showHint && (
        <div className="mt-3 space-y-1 rounded-xl bg-brand-blue-soft/60 p-3 text-left animate-fade-up">
          <p className="text-sm text-ink font-khmer">
            <span className="font-bold">Hint 1:</span> {exercise.hint1.display}
          </p>
          <p className="text-sm text-ink font-khmer">
            <span className="font-bold">Hint 2:</span> {exercise.hint2.display}
          </p>
        </div>
      )}
    </>
  )
}

/** Stage pill + question text + TTS line. */
function ExercisePrompt({
  exercise,
  position,
  total,
}: {
  readonly exercise: Exercise
  readonly position: number
  readonly total: number
}): React.JSX.Element {
  return (
    <>
      <span
        className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${stagePill[exercise.stage]}`}
      >
        {stageLabel[exercise.stage]} • {position}/{total}
      </span>
      <p className="mt-3 whitespace-pre-line text-xl font-extrabold text-ink font-khmer">
        {exercise.display}
      </p>
      <p className="mt-1 text-sm text-gray-500 font-khmer">
        🔊 {exercise.speak}
      </p>
    </>
  )
}

/** Spoken feedback shown after the child picks an answer. */
function ExerciseFeedback({
  exercise,
  isCorrect,
}: {
  readonly exercise: Exercise
  readonly isCorrect: boolean
}): React.JSX.Element {
  return (
    <p
      className={`mt-3 text-sm font-bold font-khmer animate-fade-up ${isCorrect ? 'text-quest-green' : 'text-gray-600'}`}
    >
      {isCorrect ? exercise.onCorrect.speak : exercise.onWrong.speak}
    </p>
  )
}

interface ExerciseBodyProps {
  readonly exercise: Exercise
  readonly position: number
  readonly total: number
  readonly picked: string | undefined
  readonly onPick: (option: string) => void
}

/** The question text, options, feedback, and hints inside the card. */
function ExerciseBody({
  exercise,
  position,
  total,
  picked,
  onPick,
}: ExerciseBodyProps): React.JSX.Element {
  const isCorrect = picked === exercise.expectedAnswer

  return (
    <div className="w-full rounded-3xl bg-white p-6 shadow-lg ring-1 ring-black/5">
      <ExercisePrompt exercise={exercise} position={position} total={total} />
      <ExerciseOptions exercise={exercise} picked={picked} onPick={onPick} />
      {picked !== undefined && (
        <ExerciseFeedback exercise={exercise} isCorrect={isCorrect} />
      )}
      <ExerciseHints exercise={exercise} />
    </div>
  )
}

/** A single interactive exercise rendered as a centered, animated slide. */
export function ExerciseView({
  exercise,
  position,
  total,
}: {
  readonly exercise: Exercise
  readonly position: number
  readonly total: number
}): React.JSX.Element {
  const [picked, setPicked] = useState<string | undefined>()
  const mascot = MASCOT[answerState(exercise, picked)]

  return (
    <div className="flex w-full max-w-md flex-col items-center text-center">
      <div className={`mb-3 text-5xl ${mascot.anim}`} aria-hidden="true">
        {mascot.emoji}
      </div>
      <ExerciseBody
        exercise={exercise}
        position={position}
        total={total}
        picked={picked}
        onPick={setPicked}
      />
    </div>
  )
}
