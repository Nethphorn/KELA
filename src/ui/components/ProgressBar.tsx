import type { ProgressTone } from '@/domain/types'

const TONE_CLASS: Record<ProgressTone, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  tertiary: 'bg-tertiary-fixed-dim',
  outline: 'bg-outline',
}

interface ProgressBarProps {
  readonly value: number
  readonly tone?: ProgressTone
  readonly gradient?: boolean
  readonly heightClass?: string
  readonly trackClass?: string
}

export function ProgressBar({
  value,
  tone = 'primary',
  gradient = false,
  heightClass = 'h-2.5',
  trackClass = 'bg-surface-container-high',
}: ProgressBarProps) {
  const fillClass = gradient
    ? 'bg-gradient-to-r from-primary-fixed-dim via-primary to-primary'
    : TONE_CLASS[tone]

  return (
    <div
      className={`w-full overflow-hidden rounded-full ${heightClass} ${trackClass}`}
    >
      <div
        className={`h-full rounded-full transition-all duration-500 ${fillClass}`}
        style={{ width: `${String(value)}%` }}
      />
    </div>
  )
}
