import { LESSON_CONTENT } from '@/domain/content/lesson'
import type { LessonStep } from '@/domain/types-arena'
import { MaterialIcon } from '@/ui/components/MaterialIcon'

function stepPillClass(step: LessonStep): string {
  if (step.state === 'active') {
    return 'bg-primary text-on-primary shadow-sm'
  }
  if (step.state === 'done') {
    return 'bg-surface-container text-on-surface-variant opacity-80'
  }
  return 'bg-surface-container text-on-surface-variant opacity-60'
}

export function StepIndicators() {
  return (
    <div className="no-scrollbar flex items-center gap-2 overflow-x-auto py-1">
      {LESSON_CONTENT.steps.map((step) => (
        <div
          key={step.id}
          className={`flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-1 text-label-badge ${stepPillClass(step)}`}
        >
          <MaterialIcon
            className="text-[14px]"
            filled={step.state === 'active'}
            name={step.icon}
          />
          <span>
            {step.id}. {step.label}
          </span>
        </div>
      ))}
    </div>
  )
}
