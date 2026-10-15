import { GRADE_CONTENT } from '@/domain/content/grades'
import type { DailyQuest } from '@/domain/types'
import { MaterialIcon } from '@/ui/components/MaterialIcon'

function TutorIdentity({ dailyQuest }: { readonly dailyQuest: DailyQuest }) {
  return (
    <div className="flex min-w-0 items-center gap-2.5">
      <div className="relative flex-shrink-0">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tertiary-fixed shadow-md">
          <span className="text-xl">🦉</span>
        </div>
        <span className="absolute -right-1 -top-1 flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-secondary" />
        </span>
      </div>
      <div className="flex min-w-0 flex-col">
        <div className="flex items-center gap-1">
          <span className="text-label-badge font-bold text-primary-fixed-dim">
            {dailyQuest.tutorName}
          </span>
          <span className="text-[10px] text-outline-variant">
            • Personal Coach
          </span>
        </div>
        <p className="truncate text-body-sm text-inverse-on-surface">
          {dailyQuest.tutorMessage}
        </p>
      </div>
    </div>
  )
}

export function GradeTutorBar() {
  const { dailyQuest } = GRADE_CONTENT

  return (
    <aside className="sticky bottom-2 z-30 mt-space-lg w-full">
      <div className="flex items-center justify-between gap-3 rounded-2xl bg-inverse-surface/95 p-space-md text-inverse-on-surface shadow-xl backdrop-blur-md">
        <TutorIdentity dailyQuest={dailyQuest} />
        <button
          className="flex flex-shrink-0 items-center gap-1 rounded-xl bg-primary-fixed px-3 py-2 text-label-badge font-bold text-on-primary-fixed shadow-sm transition-all hover:bg-primary-fixed-dim active:scale-95"
          type="button"
        >
          <span>Ask AI</span>
          <MaterialIcon className="text-[16px]" name="chat_spark" />
        </button>
      </div>
    </aside>
  )
}
