import { StepIndicators } from './StepIndicators'
import { LESSON_CONTENT } from '@/domain/content/lesson'
import { MaterialIcon } from '@/ui/components/MaterialIcon'

interface ProgressMeterProps {
  readonly value: number
}

function ProgressMeter({ value }: ProgressMeterProps) {
  return (
    <div className="flex w-full items-center gap-space-sm">
      <div className="flex-1 overflow-hidden rounded-full bg-surface-container p-0.5">
        <div
          className="h-full rounded-full bg-primary-container transition-all duration-500 ease-out"
          style={{ width: `${String(value)}%` }}
        />
      </div>
      <span className="text-label-badge font-bold text-primary-container">
        {value}%
      </span>
    </div>
  )
}

function XpPill({ reward }: { readonly reward: string }) {
  return (
    <div className="flex flex-shrink-0 animate-pulse items-center gap-1.5 rounded-full bg-tertiary-fixed px-3 py-1.5 shadow-sm">
      <MaterialIcon className="text-[18px] text-tertiary" filled name="stars" />
      <span className="text-title-sm font-bold text-on-tertiary-fixed">
        {reward}
      </span>
    </div>
  )
}

function LessonTitleRow() {
  const { grade, lessonLabel, titleKm, titleEn, xpReward } = LESSON_CONTENT

  return (
    <div className="flex items-center justify-between gap-space-xs">
      <div className="flex min-w-0 flex-col">
        <div className="flex items-center gap-space-xs">
          <span className="rounded-full bg-surface-container px-space-xs py-0.5 text-label-badge uppercase text-primary">
            {grade}
          </span>
          <span className="text-body-sm text-outline">{lessonLabel}</span>
        </div>
        <h2 className="truncate text-headline-md text-on-surface">
          {titleKm}{' '}
          <span className="text-body-sm font-normal text-on-surface-variant">
            {titleEn}
          </span>
        </h2>
      </div>
      <XpPill reward={xpReward} />
    </div>
  )
}

export function LessonMeta() {
  const { progress } = LESSON_CONTENT

  return (
    <div className="flex w-full flex-col gap-space-sm pb-space-md pt-space-sm">
      <LessonTitleRow />
      <ProgressMeter value={progress} />
      <StepIndicators />
    </div>
  )
}
