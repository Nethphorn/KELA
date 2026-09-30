import { SUBJECTS_CONTENT } from '@/domain/content/subjects'
import { MaterialIcon } from '@/ui/components/MaterialIcon'

interface DailyPickBannerProps {
  readonly onStart: () => void
}

function DailyPickIcon() {
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-container-lowest/20 text-white">
      <MaterialIcon className="text-[24px]" name="school" />
    </div>
  )
}

export function DailyPickBanner({ onStart }: DailyPickBannerProps) {
  const { dailyPick } = SUBJECTS_CONTENT

  return (
    <div className="mt-2 flex items-center justify-between gap-3 rounded-2xl bg-primary-container p-space-md text-on-primary-container shadow-md">
      <div className="flex min-w-0 items-center gap-3">
        <DailyPickIcon />
        <div className="flex min-w-0 flex-col">
          <span className="text-[10px] font-bold uppercase tracking-wider text-on-primary-container/80">
            {dailyPick.label}
          </span>
          <span className="truncate text-title-sm font-bold text-white">
            {dailyPick.titleKm}
          </span>
          <span className="text-body-sm text-on-primary-container/90">
            {dailyPick.subtitle}
          </span>
        </div>
      </div>
      <button
        aria-label="Start recommended lesson"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-container-lowest text-primary shadow-sm transition-all hover:scale-105 active:scale-95"
        onClick={onStart}
        type="button"
      >
        <MaterialIcon className="text-[22px]" name="play_arrow" />
      </button>
    </div>
  )
}
