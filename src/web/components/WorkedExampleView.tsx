import type { Lesson } from '../lessonContent'
import { useStaggerReveal } from './useStaggerReveal'

/** The revealed worked-example lines inside a card. */
function WorkedLines({
  lines,
  shown,
}: {
  readonly lines: string[]
  readonly shown: number
}): React.JSX.Element {
  return (
    <div className="w-full rounded-3xl bg-white p-6 shadow-lg ring-1 ring-black/5">
      <p className="mb-3 text-sm font-bold text-quest-orange">
        ខ្ញុំធ្វើ • I do it
      </p>
      <div className="space-y-1.5 font-khmer text-lg font-extrabold text-ink">
        {lines.slice(0, shown).map((line, index) => (
          // Lines are fixed and ordered, so index is a stable key.
          <p key={`${String(index)}-${line}`} className="animate-fade-up">
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}

/**
 * Animated worked example. The display lines are revealed one at a time (the
 * robot "doing it" step by step) with a bobbing mascot and a replay button.
 */
export function WorkedExampleView({
  worked,
}: {
  readonly worked: Lesson['workedExample']
}): React.JSX.Element {
  const lines = worked.display.split('\n')
  const { shown, done, reset } = useStaggerReveal(lines.length)

  return (
    <div className="flex w-full max-w-md flex-col items-center">
      <div className="mb-4 text-5xl animate-float" aria-hidden="true">
        🤖
      </div>

      <WorkedLines lines={lines} shown={shown} />

      <p className="mt-4 text-center text-sm text-gray-500 font-khmer">
        🔊 {worked.speak}
      </p>

      {done && (
        <button
          type="button"
          onClick={reset}
          className="mt-4 rounded-full bg-quest-orange-soft px-5 py-2 text-sm font-bold text-quest-orange animate-pop-in"
        >
          ↺ មើលម្តងទៀត • Replay
        </button>
      )}
    </div>
  )
}
