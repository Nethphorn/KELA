import { CalculationBoard } from './CalculationBoard'
import { LESSON_CONTENT } from '@/domain/content/lesson'
import { MaterialIcon } from '@/ui/components/MaterialIcon'

interface ExerciseArenaProps {
  readonly solved: boolean
  readonly onSolve: () => void
}

function ExercisePrompt() {
  const { stepTag, promptKm, promptEn } = LESSON_CONTENT

  return (
    <div className="flex w-full flex-col items-center gap-space-xs text-center">
      <div className="inline-flex items-center gap-1.5 rounded-full bg-tertiary-fixed px-3 py-1 text-label-badge text-on-tertiary-fixed shadow-sm">
        <MaterialIcon
          className="text-[16px] text-tertiary-container"
          filled
          name="auto_awesome"
        />
        <span>{stepTag}</span>
      </div>
      <h3 className="mt-1 text-display-hero-mobile text-on-surface">
        {promptKm}
      </h3>
      <p className="max-w-sm text-body-md text-on-surface-variant">
        {promptEn}
      </p>
    </div>
  )
}

export function ExerciseArena({ solved, onSolve }: ExerciseArenaProps) {
  return (
    <div className="relative flex w-full flex-col items-center gap-space-lg overflow-hidden rounded-3xl bg-surface-container-lowest p-space-lg shadow-xl">
      <ExercisePrompt />
      <CalculationBoard onSolve={onSolve} solved={solved} />
      <button
        className="flex w-full max-w-xs items-center justify-center gap-space-xs rounded-full bg-primary px-space-lg py-3.5 text-title-sm font-bold text-on-primary shadow-lg transition-all hover:bg-primary-container active:translate-y-1"
        onClick={onSolve}
        type="button"
      >
        <span>
          {solved ? 'បន្តទៅលំហាត់បន្ទាប់ • Next Quest' : 'យល់ហើយ! • Got it!'}
        </span>
        <MaterialIcon
          className="text-[20px]"
          name={solved ? 'celebration' : 'arrow_forward'}
        />
      </button>
    </div>
  )
}
