import type { GradeUnit } from '@/domain/types'
import { MaterialIcon } from '@/ui/components/MaterialIcon'
import { ProgressBar } from '@/ui/components/ProgressBar'
import { ICON_TONE_CLASS } from '@/ui/lib/tones'

interface GradeCompactUnitCardProps {
  readonly unit: GradeUnit
}

export function GradeCompactUnitCard({ unit }: GradeCompactUnitCardProps) {
  return (
    <div className="flex flex-col justify-between gap-3 rounded-3xl bg-surface-container-lowest p-space-md shadow-sm">
      <div>
        <div
          className={`mb-2 flex h-10 w-10 items-center justify-center rounded-xl ${ICON_TONE_CLASS[unit.tone]}`}
        >
          <MaterialIcon className="text-[24px]" name={unit.icon} />
        </div>
        <span className="text-[10px] uppercase tracking-wider text-outline">
          {unit.unitLabel}
        </span>
        <h4 className="mt-0.5 text-title-sm font-bold leading-tight text-on-surface">
          {unit.titleKm}
        </h4>
        <p className="mt-0.5 text-[11px] text-on-surface-variant">
          {unit.titleEn}
        </p>
      </div>
      <div>
        <div className="mb-1 flex items-center justify-between text-[11px] font-bold text-outline">
          <span>{unit.percent}%</span>
          <span>{unit.lessonsLabel}</span>
        </div>
        <ProgressBar tone={unit.progressTone} value={unit.percent} />
      </div>
    </div>
  )
}
