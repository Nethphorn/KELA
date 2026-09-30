import { HOME_CONTENT } from '@/domain/content/home'
import { MaterialIcon } from '@/ui/components/MaterialIcon'

export function CoachBanner() {
  return (
    <section className="mt-1 flex items-center justify-between gap-space-sm rounded-3xl bg-gradient-to-r from-primary-fixed-dim/30 to-surface-container-high p-space-md shadow-sm">
      <div className="flex min-w-0 items-center gap-space-sm">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-surface-container-lowest text-primary shadow-sm">
          <MaterialIcon className="text-xl" name="smart_toy" />
        </div>
        <div className="flex min-w-0 flex-col">
          <span className="truncate text-title-sm font-bold text-on-surface">
            {HOME_CONTENT.coachTitle}
          </span>
          <span className="truncate text-body-sm text-on-surface-variant">
            {HOME_CONTENT.coachSubtitle}
          </span>
        </div>
      </div>
      <button
        className="flex-shrink-0 rounded-full bg-surface-container-lowest p-2.5 text-primary shadow-sm transition-colors hover:bg-surface-container"
        type="button"
      >
        <MaterialIcon className="text-lg" name="forum" />
      </button>
    </section>
  )
}
