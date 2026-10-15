import { HOME_CONTENT } from '@/domain/content/home'
import { ChunkyButton } from '@/ui/components/ChunkyButton'
import { MaterialIcon } from '@/ui/components/MaterialIcon'
import { ProgressBar } from '@/ui/components/ProgressBar'

function LessonStateRow() {
  const { activeLesson } = HOME_CONTENT

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-secondary-container" />
        <span className="text-label-badge font-bold uppercase tracking-wide text-secondary">
          កំពុងសិក្សា • Continue Active Lesson
        </span>
      </div>
      <span className="rounded-full bg-secondary-fixed px-2.5 py-1 text-label-badge font-bold text-on-secondary-fixed">
        {activeLesson.unit}
      </span>
    </div>
  )
}

function LessonIdentity() {
  const { activeLesson } = HOME_CONTENT

  return (
    <div className="mt-1 flex items-start gap-space-sm">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary-fixed text-primary shadow-sm">
        <MaterialIcon className="text-2xl" filled name={activeLesson.icon} />
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <h2 className="truncate text-headline-md text-on-surface">
          {activeLesson.titleKm}
        </h2>
        <span className="truncate text-body-sm text-on-surface-variant">
          {activeLesson.titleEn}
        </span>
      </div>
    </div>
  )
}

function LessonProgress() {
  const { activeLesson } = HOME_CONTENT
  const { progress } = activeLesson

  return (
    <div className="mt-2 flex flex-col gap-1.5">
      <div className="flex items-center justify-between text-label-badge">
        <span className="text-on-surface-variant">{activeLesson.subtitle}</span>
        <span className="font-bold text-primary">
          {progress.percent}% ({progress.done}/{progress.total})
        </span>
      </div>
      <ProgressBar value={progress.percent} />
    </div>
  )
}

export function ActiveLessonCard() {
  return (
    <section className="relative flex flex-col gap-space-sm overflow-hidden rounded-3xl bg-surface-container-lowest p-space-lg shadow-sm">
      <LessonStateRow />
      <LessonIdentity />
      <LessonProgress />
      <ChunkyButton className="mt-2 w-full py-3" icon="play_arrow" iconFilled>
        Resume Lesson • បន្តការរៀន
      </ChunkyButton>
    </section>
  )
}
