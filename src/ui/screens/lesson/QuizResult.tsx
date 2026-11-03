import { useNavigate } from 'react-router-dom'

import { ChunkyButton } from '@/ui/components/ChunkyButton'
import { MaterialIcon } from '@/ui/components/MaterialIcon'

interface QuizResultProps {
  readonly total: number
  readonly correct: number
  readonly onReplay: () => void
}

interface ScoreProps {
  readonly correct: number
  readonly total: number
}

function starsFor(correct: number, total: number): number {
  if (total === 0) {
    return 0
  }
  const ratio = correct / total
  if (ratio >= 1) {
    return 3
  }
  if (ratio >= 0.7) {
    return 2
  }
  if (ratio >= 0.4) {
    return 1
  }
  return 0
}

function Stars({ count }: { readonly count: number }) {
  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2].map((slot) => (
        <MaterialIcon
          key={slot}
          className={`text-[36px] ${
            slot < count ? 'text-tertiary' : 'text-outline-variant'
          }`}
          filled={slot < count}
          name="star"
        />
      ))}
    </div>
  )
}

function ResultScore({ correct, total }: ScoreProps) {
  return (
    <>
      <MaterialIcon
        className="text-[56px] text-tertiary"
        filled
        name="emoji_events"
      />
      <h3 className="text-headline-md text-on-surface">
        ចប់មេរៀន! • Lesson complete
      </h3>
      <p className="text-display-hero-mobile font-extrabold text-primary">
        {correct} / {total}
      </p>
    </>
  )
}

function ResultActions({ onReplay }: { readonly onReplay: () => void }) {
  const navigate = useNavigate()

  return (
    <div className="flex w-full max-w-xs flex-col gap-space-xs">
      <ChunkyButton
        className="w-full"
        icon="replay"
        onClick={onReplay}
        tone="primary"
      >
        លេងម្តងទៀត • Play again
      </ChunkyButton>
      <button
        className="w-full rounded-full bg-surface-container px-4 py-3 text-title-sm font-semibold text-on-surface transition-all hover:bg-surface-container-high active:scale-95"
        onClick={() => {
          void navigate(-1)
        }}
        type="button"
      >
        ត្រឡប់ក្រោយ • Back
      </button>
    </div>
  )
}

export function QuizResult({ total, correct, onReplay }: QuizResultProps) {
  return (
    <div className="relative flex w-full flex-col items-center gap-space-lg overflow-hidden rounded-3xl bg-surface-container-lowest p-space-lg text-center shadow-xl">
      <ResultScore correct={correct} total={total} />
      <Stars count={starsFor(correct, total)} />
      <ResultActions onReplay={onReplay} />
    </div>
  )
}
