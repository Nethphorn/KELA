import { useState } from 'react'

import type { Lesson } from '../lessonContent'

type Check = Lesson['checkUnderstanding']

/** Colour for a check option given the current pick. */
function checkTone(
  option: string,
  answer: string,
  picked: string | undefined,
): string {
  if (picked === undefined) {
    return 'bg-white text-ink ring-1 ring-black/5 hover:bg-brand-blue-soft'
  }
  if (option === answer) {
    return 'bg-quest-green-soft text-quest-green ring-2 ring-quest-green animate-pop-in'
  }
  if (option === picked) {
    return 'bg-red-50 text-red-500 ring-2 ring-red-400 animate-shake'
  }
  return 'bg-white text-ink ring-1 ring-black/5 opacity-60'
}

/** The tappable options for the check question. */
function CheckOptions({
  check,
  picked,
  onPick,
}: {
  readonly check: Check
  readonly picked: string | undefined
  readonly onPick: (option: string) => void
}): React.JSX.Element {
  return (
    <div className="mt-4 flex flex-col gap-3">
      {check.options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => {
            onPick(option)
          }}
          className={`rounded-xl px-4 py-3 text-base font-bold font-khmer transition ${checkTone(option, check.answer, picked)}`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

/**
 * Interactive "we do it together" check. The child taps an option; the correct
 * one pops and turns green, a wrong tap gently shakes. Not scored.
 */
export function CheckView({
  check,
}: {
  readonly check: Check
}): React.JSX.Element {
  const [picked, setPicked] = useState<string | undefined>()

  return (
    <div className="flex w-full max-w-md flex-col items-center text-center">
      <div className="mb-4 text-5xl animate-float" aria-hidden="true">
        🧮
      </div>
      <div className="w-full rounded-3xl bg-brand-blue-soft/60 p-6 shadow-lg ring-1 ring-black/5">
        <p className="text-sm font-bold text-brand-blue">
          តោះធ្វើជាមួយគ្នា • Check
        </p>
        <p className="mt-2 text-xl font-extrabold text-ink font-khmer">
          {check.display}
        </p>
        <CheckOptions check={check} picked={picked} onPick={setPicked} />
        {picked === check.answer && (
          <p className="mt-4 text-sm font-bold text-quest-green animate-fade-up font-khmer">
            ត្រឹមត្រូវ! 🎉
          </p>
        )}
      </div>
    </div>
  )
}
