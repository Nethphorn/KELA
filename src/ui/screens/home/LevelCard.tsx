import { HOME_CONTENT } from '@/domain/content/home'
import { MaterialIcon } from '@/ui/components/MaterialIcon'
import { ProgressBar } from '@/ui/components/ProgressBar'

function LevelGreeting() {
  const { greetingKm, greetingEn, level } = HOME_CONTENT

  return (
    <div className="mb-space-sm flex items-center justify-between gap-space-sm">
      <div className="flex min-w-0 flex-col">
        <span className="truncate text-headline-lg-mobile text-on-surface">
          {greetingKm}
        </span>
        <span className="text-body-md text-on-surface-variant">
          {greetingEn}
        </span>
      </div>
      <div className="flex flex-shrink-0 items-center gap-1 rounded-full bg-primary-fixed px-3 py-1 text-on-primary-fixed shadow-sm">
        <MaterialIcon
          className="text-sm text-primary"
          filled
          name="auto_awesome"
        />
        <span className="text-label-badge uppercase tracking-wider">
          {level}
        </span>
      </div>
    </div>
  )
}

function LevelExperience() {
  const { levelTitle, xp } = HOME_CONTENT

  return (
    <div className="mt-1 flex flex-col gap-1.5">
      <div className="flex items-center justify-between text-label-badge text-on-surface-variant">
        <span className="font-semibold text-primary">{levelTitle}</span>
        <span>
          <strong className="text-on-surface">{xp.done}</strong> / {xp.total} XP
        </span>
      </div>
      <ProgressBar
        gradient
        heightClass="h-3"
        trackClass="bg-surface-container"
        value={xp.percent}
      />
    </div>
  )
}

export function LevelCard() {
  return (
    <section className="flex flex-col rounded-3xl bg-surface-container-lowest p-space-lg shadow-sm">
      <LevelGreeting />
      <LevelExperience />
    </section>
  )
}
