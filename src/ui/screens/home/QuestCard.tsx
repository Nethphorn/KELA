import type { Quest } from '@/domain/types'
import { MaterialIcon } from '@/ui/components/MaterialIcon'
import { ProgressBar } from '@/ui/components/ProgressBar'
import { ICON_TONE_CLASS } from '@/ui/lib/tones'

interface QuestCardProps {
  readonly quest: Quest
}

function QuestBody({ quest }: QuestCardProps) {
  return (
    <div className="flex min-w-0 flex-col">
      {quest.unit === undefined ? null : (
        <span className="text-label-badge text-on-surface-variant">
          {quest.unit}
        </span>
      )}
      <div className="flex items-center gap-1.5">
        <span className="truncate text-title-sm font-bold text-on-surface">
          {quest.title}
        </span>
        {quest.reward === undefined ? null : (
          <span className="rounded-full bg-tertiary px-1.5 py-0.5 text-[10px] font-bold text-on-tertiary">
            {quest.reward}
          </span>
        )}
      </div>
      <span className="truncate text-body-sm text-on-surface-variant">
        {quest.subtitle}
      </span>
    </div>
  )
}

function QuestTrailing({ quest }: QuestCardProps) {
  if (quest.progress === undefined) {
    return (
      <button
        className="flex-shrink-0 rounded-full bg-tertiary px-3 py-2 text-label-badge font-bold text-on-tertiary shadow-[0_3px_0_0_#492c00] transition-all active:translate-y-0.5 active:shadow-[0_1px_0_0_#492c00]"
        type="button"
      >
        {quest.action}
      </button>
    )
  }

  if (quest.completed) {
    return (
      <div className="flex flex-shrink-0 items-center gap-1 rounded-full bg-surface-container-high px-2.5 py-1 text-label-badge font-bold text-primary">
        <MaterialIcon className="text-sm" filled name="check_circle" />
        <span>{quest.progress.percent}%</span>
      </div>
    )
  }

  return (
    <span className="flex-shrink-0 rounded-full bg-secondary-fixed px-2.5 py-1 text-label-badge font-bold text-on-secondary-fixed">
      {quest.progress.percent}% Done
    </span>
  )
}

export function QuestCard({ quest }: QuestCardProps) {
  return (
    <div className="relative flex flex-col gap-space-sm rounded-3xl bg-surface-container-lowest p-space-md shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex min-w-0 items-center gap-space-sm">
          <div
            className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl ${ICON_TONE_CLASS[quest.tone]}`}
          >
            <MaterialIcon className="text-2xl" filled name={quest.icon} />
          </div>
          <QuestBody quest={quest} />
        </div>
        <QuestTrailing quest={quest} />
      </div>
      {quest.progress === undefined ? null : (
        <ProgressBar
          heightClass="h-2"
          tone={quest.tone}
          value={quest.progress.percent}
        />
      )}
    </div>
  )
}
