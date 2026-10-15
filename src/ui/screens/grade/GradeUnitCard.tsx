import type { GradeUnit } from '@/domain/types'
import { MaterialIcon } from '@/ui/components/MaterialIcon'
import { ProgressBar } from '@/ui/components/ProgressBar'
import { ICON_TONE_CLASS } from '@/ui/lib/tones'

interface GradeUnitCardProps {
  readonly unit: GradeUnit
  readonly onContinue: () => void
}

interface GradeUnitProps {
  readonly unit: GradeUnit
}

function CurrentBadge({ label }: { readonly label: string }) {
  return (
    <div className="absolute right-0 top-0 flex items-center gap-1 rounded-bl-2xl bg-tertiary-fixed px-3 py-1 text-[10px] font-extrabold text-on-tertiary-fixed shadow-sm">
      <span>🔥</span> {label}
    </div>
  )
}

function StatusPill({ unit }: GradeUnitProps) {
  if (unit.completed) {
    return (
      <div className="flex items-center gap-1 rounded-full bg-surface-container-high px-2.5 py-1 text-label-badge font-bold text-primary">
        <MaterialIcon
          className="text-[16px] text-primary"
          filled
          name="check_circle"
        />
        <span>{unit.statusLabel}</span>
      </div>
    )
  }

  return (
    <span className="rounded-full bg-surface-container px-2.5 py-1 text-label-badge font-bold text-on-surface-variant">
      {unit.statusLabel}
    </span>
  )
}

interface UnitIconProps extends GradeUnitProps {
  readonly current: boolean
}

function UnitIcon({ unit, current }: UnitIconProps) {
  const labelTone = current ? 'font-bold text-secondary' : 'text-outline'
  const titleTone = current
    ? 'font-bold text-primary'
    : 'text-on-surface-variant'

  return (
    <div className="flex items-center gap-space-sm">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${ICON_TONE_CLASS[unit.tone]}`}
      >
        <MaterialIcon className="text-[28px]" filled name={unit.icon} />
      </div>
      <div>
        <span
          className={`text-label-badge uppercase tracking-wider ${labelTone}`}
        >
          {unit.unitLabel}
        </span>
        <h3 className="text-headline-md text-on-surface">{unit.titleKm}</h3>
        <p className={`text-body-sm ${titleTone}`}>{unit.titleEn}</p>
      </div>
    </div>
  )
}

function UnitFooter({ unit }: GradeUnitProps) {
  return (
    <div className="flex items-center justify-between pt-1 text-body-sm text-on-surface-variant">
      <span className="text-label-badge">{unit.lessonsLabel}</span>
      <span className="text-label-badge font-bold text-primary">
        {unit.percent}%
      </span>
    </div>
  )
}

function ContinueActions({ onContinue }: { readonly onContinue: () => void }) {
  return (
    <div className="flex items-center gap-2 pt-1">
      <button
        className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-surface-container px-3 py-2 text-title-sm text-on-surface transition-all hover:bg-surface-container-high active:scale-95"
        type="button"
      >
        <MaterialIcon className="text-[18px]" name="replay" />
        <span>Review Lessons</span>
      </button>
      <button
        className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-primary px-3 py-2 text-title-sm text-on-primary shadow-sm transition-all active:scale-95"
        onClick={onContinue}
        type="button"
      >
        <span>Continue</span>
        <MaterialIcon className="text-[18px]" name="arrow_forward" />
      </button>
    </div>
  )
}

function CurrentUnitCard({ unit, onContinue }: GradeUnitCardProps) {
  return (
    <div className="relative flex flex-col gap-3 overflow-hidden rounded-3xl bg-surface-container-lowest p-space-lg shadow-md ring-2 ring-primary/20">
      <CurrentBadge label={unit.statusLabel} />
      <div className="flex items-start justify-between pr-16">
        <UnitIcon current unit={unit} />
      </div>
      {unit.description === undefined ? null : (
        <p className="text-body-sm text-on-surface-variant">
          {unit.description}
        </p>
      )}
      <UnitFooter unit={unit} />
      <ProgressBar tone={unit.progressTone} value={unit.percent} />
      <ContinueActions onContinue={onContinue} />
    </div>
  )
}

function StandardUnitCard({ unit }: GradeUnitProps) {
  return (
    <div className="flex flex-col gap-3 rounded-3xl bg-surface-container-lowest p-space-lg shadow-sm">
      <div className="flex items-start justify-between">
        <UnitIcon current={false} unit={unit} />
        <StatusPill unit={unit} />
      </div>
      <UnitFooter unit={unit} />
      <ProgressBar tone={unit.progressTone} value={unit.percent} />
    </div>
  )
}

export function GradeUnitCard({ unit, onContinue }: GradeUnitCardProps) {
  if (unit.current) {
    return <CurrentUnitCard onContinue={onContinue} unit={unit} />
  }
  return <StandardUnitCard unit={unit} />
}
